import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const InputList = ({ data }) => (
  <div>
    {data.map((item) => (
      <Input
        type={item.type}
        alt={item.alt}
        src={item.image}
      />
    ))}
  </div>
);

InputList.propTypes = {
  data: PropTypes.shape.isRequired
};

export default InputList;
