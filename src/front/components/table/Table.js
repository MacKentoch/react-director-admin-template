// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const Table = ({ children }: Props) => (
  <table className="table table-hover">{children}</table>
);

Table.displayName = 'Table';

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
