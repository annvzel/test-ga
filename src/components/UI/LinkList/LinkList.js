import React from 'react';
import PropTypes from 'prop-types';
import Navlink from '../Navlink/Navlink';

const LinkList = ({ data }) => (
  <span>
    {data.map((item) => (
      <Navlink
        text={item.text}
        url={item.url}
        title={item.title}
      />
    ))}
  </span>
);

LinkList.propTypes = {
  data: PropTypes.shape.isRequired
};

export default LinkList;
