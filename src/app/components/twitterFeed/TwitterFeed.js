import React from 'react';

const TwitterFeed = () => {
  return (
    <section className="panel">
      <header className="panel-heading">
        Twitter Feed
      </header>
      <div className="panel-body">
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
        <ul className="media-list">
          <li className="media">
            <a href="#" className="pull-left">
              <img
                src={require('../../vendors/img/26115.jpg')}
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
                    30 min ago
                  </em>
                </small>
              </span>
              <a href="page_ready_user_profile.php">
                <strong>
                  John Doe
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
          <li className="media">
            <a href="#" className="pull-left">
              <img
                src={require('../../vendors/img/26115.jpg')}
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
                    30 min ago
                  </em>
                </small>
              </span>
              <a href="page_ready_user_profile.php">
                <strong>
                  John Doe
                </strong>
              </a>
              <p>
                In hac
                <a href="#">
                  habitasse</a>
                 platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
                <a
                  href="#"
                  className="text-danger">
                  <strong>
                    #design
                  </strong>
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TwitterFeed;
