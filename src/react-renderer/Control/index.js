import React from 'react';

class Control extends React.Component {
  controlRef = null;

  componentDidMount() {
    this.props.bindControl(this.controlRef, this.props.control);
  }

  render() {
    return (
      <div ref={ref => { this.controlRef = ref; }} />
    );
  }
}

export default Control;