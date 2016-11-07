import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import {FlexContext, FlexBox} from './flex';

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

const Text = ({style, color, layout, children}) => {

  return (<foreignObject
    style={style}
    fill={color || 'transparent'}
    x="0"
    y="0"
    width={layout.width}
    height={layout.height}
  >
    <div style={{color: 'black', textAlign: 'center', overflow: 'hidden'}}>
      {children}
    </div>
  </foreignObject>)
};

const OuterContainer = FlexBox(Container, {
  width: 500,
  height: 500,
  stroke: 'red',
  strokeWidth: 2,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

const BoxContainer = FlexBox(Container, {
  width: 100,
  height: 100,
  stroke: 'black',
  strokeWidth: 5,
  justifyContent: 'space-around',
  alignItems: 'center'
});

const Box1 = FlexBox(Container, {
  stroke: 'green',
  height: 40,
  width: 40
});

const Box2 = FlexBox(Container, {
  stroke: 'yellow',
  height: 40,
  width: 40
});

const LeftContainer = FlexBox(Container, {
  stroke: 'yellow',
  height: 40,
  width: 40,
  flexShrink: 0
});
const RightContainer = FlexBox(Container, {
  stroke: 'red',
  height: 40,
  width: 40,
  flexShrink: 0
});
const TextContainer = FlexBox(Text, {
  stroke: 'yellow',
  fill: 'red',
  flexShrink: 0,
});

const App = () => (
  <svg height="-1" width="-1">
    <FlexContext>
      <OuterContainer id="outer">
        <TextContainer id="text" />
      </OuterContainer>
    </FlexContext>
  </svg>
);


ReactDOM.render(<App />, document.getElementById('app'));


