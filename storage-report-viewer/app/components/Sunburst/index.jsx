import React from 'react';

import Arcs from '../Arcs';
import Tooltips from '../Tooltips';

class Sunburst extends React.Component {

  static propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    nodes: React.PropTypes.array.isRequired,
    highlightedNodes: React.PropTypes.array.isRequired,
    updateFocusNode: React.PropTypes.func.isRequired,
    updateCenterNode: React.PropTypes.func.isRequired
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    const { width, height } = props;

    this.centeringTransform = `translate(${width / 2} ${height / 2})`;
  }

  render() {

    const { width, height, nodes, highlightedNodes,
            updateFocusNode, updateCenterNode } =
      this.props;

    return (
      <svg width={width} height={height}>
        <g transform={this.centeringTransform}>
          <Arcs nodes={nodes} highlightedNodes={highlightedNodes}
            updateFocusNode={updateFocusNode}
            updateCenterNode={updateCenterNode} />
          <Tooltips nodes={highlightedNodes} />
        </g>
      </svg>
    );

  }

}

export default Sunburst;
