import React from 'react';

function SelectLimit(props) {
  return (
    <select
      onChange={(e) => props.onLimitChange(e.target.value)}
      className='select'
    >
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='20'>20</option>
    </select>
  );
}

export default SelectLimit;
