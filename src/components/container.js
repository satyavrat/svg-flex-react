import React, {Component} from 'react';

const Container = ({style, color, layout, children}) => (
  <g>
    <rect
      style={style}
      fill={color || 'transparent'}
      x="0"
      y="0"
      width={layout.width}
      height={layout.height}
    />
    {children}
  </g>
);



export default Container;
