import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import {FlexContext, FlexBox} from './flex';

import Container from './components/container'
import ScrollContainer from './components/scrollContainer'
import Text from './components/text'

const OuterContainer = FlexBox(Container, {
  width: 500,
  height: 500,
  stroke: 'red',
  strokeWidth: 1,
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'center'
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
  flexShrink: 0,
  borderWidth: 1
});
const RightContainer = FlexBox(Container, {
  stroke: 'red',
  height: 40,
  width: 40,
  borderWidth: 1
});
const TextContainer = FlexBox(Text, {
  stroke: 'black',
  fill: 'black'
});

const App = () => (
  <div style={{width:'100%',height: '100%', display: 'flex'}}>
    <div className="outer" style={{display: 'flex',width: '500px',
      height: '500px',
      flexShrink: 0,
      border: '1px solid red',
      marginRight: '10px',
      justifyContent: 'center'
    }}>
      <div className="left"
      style={{
        width: '50px',
        height: '50px',
        border: '1px solid yellow'
      }}/>
      <div className="middle">TEXT hello!</div>
      <div className="right" style={{
        width: '50px',
        height: '50px',
        border: '1px solid red'
      }}></div>
    </div>
    <svg height="-1" width="-1">
      <FlexContext>
        <OuterContainer id="outer">
          <LeftContainer/>
          <TextContainer id="text">TEXT hello! TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello! TEXT hello! TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!TEXT hello!</TextContainer>
          <RightContainer/>
        </OuterContainer>
      </FlexContext>
    </svg>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));


