import React, { PropTypes } from 'react';


const TeamMateAddButton = ({ onAdd }) => {
  return (
    <div className="panel-footer bg-white">
      <button
        className="btn btn-primary btn-addon btn-sm"
        onClick={onAdd}>
        <i className="fa fa-plus"></i>
        Add Teammate
      </button>
    </div>
  );
};

TeamMateAddButton.propTypes = {
  onAdd: PropTypes.func
};

export default TeamMateAddButton;
