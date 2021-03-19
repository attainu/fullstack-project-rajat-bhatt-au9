import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Moment from "react-moment";

const ListConversation = ({
  ticketId,
  reply: { _id, text, name, avatar, user, date },
  auth,
}) => {
  return (
    <div class='new_comment'>
      <ul class='user_comment'>
        <div class='user_avatar'>
          <img src={avatar} />
        </div>
        <div class='comment_body'>
          <p>{text}</p>
        </div>

        <div class='comment_toolbar'>
          <div class='comment_details'>
            <ul>
              <li>
                <i class='fa fa-clock-o'></i>
                <Moment date={date} format='hh:mm:ss' durationFromNow />
              </li>
              <li>
                <i class='fa fa-calendar'></i>{" "}
                <Moment format='DD/MM/YYYY'>{date}</Moment>
              </li>
              <li>
                <i class='fa fa-pencil'></i> <span class='user'>{name}</span>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};

ListConversation.propTypes = {
  ticketId: PropTypes.number.isRequired,
  reply: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ListConversation);
