import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import { FlexContext, FlexBox } from './flex';

class Container extends Component {
  render () {
    return (
      <g>
        <rect
          style={this.props.style}
          fill={this.props.color || 'transparent'}
          x="0"
          y="0"
          width={this.props.layout.width}
          height={this.props.layout.height}
        />
        {this.props.children}
      </g>
    );
  }
}

const OuterContainer = FlexBox(Container, {
  width: '100%',
  height: '100%',
  stroke: 'red',
  strokeWidth: 2,
  flexDirection:'row',
  justifyContent: 'space-around',
  alignItems:'center'
});

const BoxContainer = FlexBox(Container, {
  width: 100,
  height: 100,
  stroke: 'black',
  strokeWidth: 5,
  justifyContent: 'space-around'
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

export default class App extends Component {
  render () {

    return (
      <svg height="600" width="600">
        <FlexContext>
         <g>
         <OuterContainer>
           <BoxContainer>
            <Box1 />
            <Box2 />
           </BoxContainer>
           <BoxContainer>
            <Box1 />
           </BoxContainer>
         </OuterContainer>
        </g>
        </FlexContext>
      </svg>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

