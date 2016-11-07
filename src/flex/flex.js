import React, {Component} from 'react';
import isFlexBoxProperty from './flexbox-props';
import ReactDOM from 'react-dom';


import shallowEquals from 'shallow-equals';

export default (Composed, componentStyles = {}) => class extends Component {
  static displayName = 'FlexBox';

  static contextTypes = {
    styleTools: React.PropTypes.object.isRequired,
    waitForLayoutCalculation: React.PropTypes.func.isRequired,
    deregister: React.PropTypes.func.isRequired,
    needsLayout: React.PropTypes.bool.isRequired
  };

  static childContextTypes = {
    styleTools: React.PropTypes.object.isRequired,
    needsLayout: React.PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    const style = Object.assign(componentStyles, props.style);
    const {svgStyles, flexStyles} = partitionStyles(style);
    this.flexStyles = flexStyles;
    this.styleTools = {};

    this.state = {
      layout: {top: 0, left: 0, width: 0, height: 0},
      styles: svgStyles
    };
  }

  componentWillMount () {
    ({ setStyle: this.styleTools.setStyle,
      path: this.pathToNode } = this.context.styleTools.setStyle(this.flexStyles));

    this.context.waitForLayoutCalculation(this.handleLayoutCalculation);
  }


  componentWillReceiveProps(nextProps, nextContext) {
    const {flexStyles} = partitionStyles(nextProps.style);
    let needsLayout = nextContext.needsLayout;

    ({
      setStyle: this.styleTools.setStyle,
      path: this.pathToNode
    } = this.context.styleTools.setStyle(flexStyles));

    this.context.waitForLayoutCalculation(this.handleLayoutCalculation);
  }

  getChildContext() {
    return {
      styleTools: this.styleTools,
      needsLayout: this.context.needsLayout
    }
  }

  render() {
    const transformation = `translate(${this.state.layout.left},${this.state.layout.top})`;
    const {style, ...other} = this.props;

    console.log("layout", this.state.layout);

    return (
      <g transform={transformation}>
        <Composed layout={this.state.layout}
                  style={this.state.styles} {...other}/>
      </g>
    );
  }

  handleLayoutCalculation = layout => {
    this.setState({layout: this.getMyLayout(layout).layout});
  };

  getMyLayout(layout) {
    this.pathToNode.forEach(childIndex => {
      layout = layout.children[childIndex]
    });

    return layout;
  }
};

function partitionStyles(styles = {}) {
  return Object.keys(styles).reduce((partitions, property) => {
    if (isFlexBoxProperty(property)) {
      partitions.flexStyles[property] = styles[property];
    } else {
      partitions.svgStyles[property] = styles[property];
    }

    return partitions;
  }, {svgStyles: {}, flexStyles: {}});
}
