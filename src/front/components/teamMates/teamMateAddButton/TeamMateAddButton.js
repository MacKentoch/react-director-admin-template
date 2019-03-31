// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onAdd: () => any,
};

const TeamMateAddButton = ({ onAdd = () => {} }: Props) => (
  <div className="panel-footer bg-white">
    <button className="btn btn-primary btn-addon btn-sm" onClick={onAdd}>
      <i className="fa fa-plus" />
      Add Teammate
    </button>
  </div>
);

TeamMateAddButton.displayName = 'TeamMateAddButton';

TeamMateAddButton.propTypes = {
  onAdd: PropTypes.func,
};

export default TeamMateAddButton;
