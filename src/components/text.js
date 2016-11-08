import React, {Component} from 'react';

class Text extends Component{
  render(){
    let {color, children, layout, style} = this.props;

    // return (<foreignObject
    //   style={style}
    //   fill={color || 'transparent'}
    //   x="0"
    //   y="0"
    //   width={layout.width}
    //   height={layout.height}
    // >
    //   <div style={{color: 'black', textAlign: 'center', overflow: 'hidden'}}>
    //     {children}
    //   </div>
    // </foreignObject>)


    return <text  style={style}
                  fill={color}
                  x="0"
                  y="0"
                  width={layout.width}
                  height={layout.height}>{children}</text>
  }
}


export default Text;
