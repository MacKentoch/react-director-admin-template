// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TableBody = ({ children }: Props) => <tbody>{children}</tbody>;

TableBody.displayName = 'TableBody';

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableBody;
