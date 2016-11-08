import React, {Component} from 'react';

const ScrollContainer =  ({children}) => (<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
        {children}
      </svg>
    </div>
  </foreignObject>
</svg>);

export default ScrollContainer
