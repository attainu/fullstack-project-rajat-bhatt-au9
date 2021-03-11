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
        ticket_issue: req.body.ticket_issue,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        priority: req.body.priority,
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
    const tickets = await Ticket.find().sort({ date: -1 });
    res.json(tickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
