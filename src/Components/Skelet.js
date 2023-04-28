import React, { useEffect, useState } from 'react';
import { Skeleton } from 'antd';

const Skelet = () => {
  return new Array(20).fill(1).map((_, i) => (
    <div className='cont skelet'>
      <div class='card m-3' style={{ width: '260px', height: '450px' }}>
        <Skeleton.Image
          active
          style={{ height: '200px', width: '200px', margin: '30px' }}
        />

        <div class='card-body'>
          <Skeleton.Input active />
          <div className='but'>
            <Skeleton.Button active />
            <Skeleton.Button active />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Skelet;
