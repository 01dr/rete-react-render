import React from 'react';

import s from './styles.module.css';

class Socket extends React.Component {
  socketRef = null;

  componentDidMount() {
    this.props.bindSocket(this.socketRef, this.props.type, this.props.io);
  }

  render() {
    const { type } = this.props;

    return (
      <div className={s.socket} ref={ref => { this.socketRef = ref; }}></div>
    );
  }
}

export default Socket;