import React, { PropTypes } from 'react';

const Tweet = ({
  time,
  author,
  authorAvatar,
  children
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
        { children }
      </div>
    </li>
  );
};

Tweet.propTypes = {
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Tweet;
