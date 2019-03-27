// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TableCol = ({ children }: Props) => <td>{children}</td>;

TableCol.displayName = 'TableCol';

TableCol.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableCol;
