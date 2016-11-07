import React, {Component} from 'react';
import EventEmitter from 'wolfy87-eventemitter';
import computeLayout from 'css-layout';

export default class FlexContext extends Component {
  static childContextTypes = {
    styleTools: React.PropTypes.object.isRequired,
    waitForLayoutCalculation: React.PropTypes.func.isRequired,
    deregister: React.PropTypes.func.isRequired,
    needsLayout: React.PropTypes.bool.isRequired
  };

  constructor(props, context) {
    super(props);

    this.layoutNotifier = new EventEmitter();

    this.stylesRoot = {children: []};
    this.styleTools = {};
  }

  state = {
    needsLayout: true
  };

  deregister = cb => {
    this.layoutNotifier.removeListener('layout-update', cb)
  };

  waitForLayoutCalculation = (cb) => {
    this.layoutNotifier.once('layout-update', cb);
  };

  getChildContext() {
    return {
      styleTools: this.styleTools,
      waitForLayoutCalculation: this.waitForLayoutCalculation,
      deregister: this.deregister,
      needsLayout: this.state.needsLayout
    }
  }

  render() {
    return <g>{this.props.children}</g>;
  }

  startNewStyleTree() {
    this.stylesRoot = {children: []};
    ({setStyle: this.styleTools.setStyle} = setStyle(undefined, this.stylesRoot));
  }

  computeLayoutAndBroadcastResults() {
    computeLayout(this.stylesRoot);
    this.layoutNotifier.emit('layout-update', this.stylesRoot);
  }

  componentWillMount() {
    this.startNewStyleTree();
  }

  componentDidMount() {
    this.computeLayoutAndBroadcastResults();
    // this.setState({
    //   needsLayout: false
    // })
  }

  componentWillUpdate() {
    this.startNewStyleTree();
  }

  componentDidUpdate() {
    this.computeLayoutAndBroadcastResults();
  }
}

function setStyle(style = {}, styles, path = []) {
  if (styles.style === undefined) {
    styles.style = style;
  } else {
    let childStyle = {style: style, children: []};
    styles.children.push(childStyle);
    path.push(styles.children.length - 1);

    styles = childStyle;
  }

  return {
    path: path.slice(),
    setStyle: function (childStyle) {
      return setStyle(childStyle, styles, path.slice());
    }
  }
}
