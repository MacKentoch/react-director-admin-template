import React from 'react';

const WriteNewTweet = ({}) => {
  return (
    <div className="twt-area">
      <form
        action="#"
        method="post">
        <textarea
          className="form-control"
          name="profile-tweet"
          placeholder="Share something on Twitter.."
          rows="3">
        </textarea>
        <div className="clearfix">
          <button
            className="btn btn-sm btn-primary pull-right"
            type="submit">
            <i className="fa fa-twitter"></i>
            Tweet
          </button>
          <a
            className="btn btn-link btn-icon fa fa-location-arrow"
            data-original-title="Add Location"
            data-placement="bottom"
            data-toggle="tooltip"
            href="#"
            style={{textDecoration: 'none'}}
            title="">
          </a>
          <a
            className="btn btn-link btn-icon fa fa-camera"
            data-original-title="Add Photo"
            data-placement="bottom"
            data-toggle="tooltip"
            href="#"
            style={{textDecoration: 'none'}}
            title="">
          </a>
        </div>
      </form>
    </div>
  );
};

export default WriteNewTweet;
