'use strict';

import React from 'react';

const Notifications = () => {
  return (
    <section className="panel">
      <header className="panel-heading">
        Notifications
      </header>
      <div className="panel-body" id="noti-box">
        <div className="alert alert-block alert-danger">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </div>
        <div className="alert alert-success">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Well done!</strong> You successfully read this important alert message.
        </div>
        <div className="alert alert-info">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </div>
        <div className="alert alert-warning">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Warning!</strong> Best check yo self, you're not looking too good.
        </div>
        <div className="alert alert-block alert-danger">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </div>
        <div className="alert alert-success">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Well done!</strong> You successfully read this important alert message.
        </div>
        <div className="alert alert-info">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </div>
        <div className="alert alert-warning">
          <button data-dismiss="alert" className="close close-sm" type="button">
            <i className="fa fa-times"></i>
          </button>
          <strong>Warning!</strong> Best check yo self, you're not looking too good.
        </div>
      </div>
    </section>
  );
};

export default Notifications;
