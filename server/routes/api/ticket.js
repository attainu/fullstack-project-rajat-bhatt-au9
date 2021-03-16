const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Ticket = require("../../models/Ticket");
const User = require("../../models/User");

//@route    POST api/ticket
//@desc     Create a ticket
//@access    Private
router.post(
  "/",
  [
    auth,
    [
      check("ticket_issue", "Ticket Issue is required").not().isEmpty(),
      check("priority", "Priority is required").not().isEmpty(),
      check("desc", "Description is required").not().isEmpty(),
      check("req_category", "req_category is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //getting user from db without password
      const user = await User.findById(req.user.id).select("-password");

      const newTicket = new Ticket({
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        user: req.user.id,
        ticket_issue: req.body.ticket_issue,
        priority: req.body.priority,
        desc: req.body.desc,
        req_category: req.body.req_category,
      });
      const ticket = await newTicket.save();

      res.json(ticket);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    GET api/ticket
//@desc     Get all ticket
//@access    Private
router.get("/", auth, async (req, res) => {
  try {
    //tickets sorted by date tickets recent one first
    const ticket = await Ticket.find().sort({ date: -1 });
    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/ticket/:id
//@desc     Get ticket by id
//@access    Private
router.get("/:id", auth, async (req, res) => {
  try {
    //post sorted by date post recent one first
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ msg: "Post not Found" });
    }

    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Ticket not Found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    POST api/ticket/conversation/:id
//@desc     reply conversation on a ticket
//@access    Private
router.post(
  "/conversation/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //getting user from db without password
      const user = await User.findById(req.user.id).select("-password");

      const ticket = await Ticket.findById(req.params.id);

      const newConversation = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };
      ticket.conversation.unshift(newConversation);
      await ticket.save();

      res.json(ticket.conversation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
