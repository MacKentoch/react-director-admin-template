import React, { PropTypes } from 'react';

const Tweet = ({
  time,
  author,
  authorAvatar

}) => {
  return (
    <li className="media">
      <a href="#" className="pull-left">
        <img
          src={authorAvatar}
          alt="Avatar"
          className="img-circle"
          width="64"
          height="64"
        />
      </a>
      <div className="media-body">
        <span className="text-muted pull-right">
          <small>
            <em>
              {time}
            </em>
          </small>
        </span>
        <a href="#">
          <strong>
            {author}
          </strong>
        </a>
        <p>
          In hac
          <a href="#">
            habitasse
          </a>
           platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
          <a
            href="#"
            className="text-danger">
            <strong>
              #dev
            </strong>
          </a>
        </p>
      </div>
    </li>
  );
};

Tweet.propTypes = {
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAvatar: PropTypes.object.isRequired,
  tweetMessage: PropTypes.node.isRequired
};

export default Tweet;
