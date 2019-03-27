// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TableHeader = ({ children }: Props) => (
  <thead>
    <tr>{children}</tr>
  </thead>
);

TableHeader.displayName = 'TableHeader';

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableHeader;
