// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TableRow = ({ children }: Props) => <tr>{children}</tr>;

TableRow.displayName = 'TableRow';

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
