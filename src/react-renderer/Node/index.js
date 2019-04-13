import React from 'react';

import Socket from '../Socket';
import Control from '../Control';

import s from './style.module.css';

class Node extends React.Component {
  render() {
    console.log('Node props', this.props);

    const { node, editor, bindSocket, bindControl } = this.props;

    const outputs = Array.from(node.outputs.values());
    const inputs = Array.from(node.inputs.values());
    const controls = Array.from(node.controls.values());
    const selected = editor.selected.contains(node) ? 'selected' : '';

    return (
      <div className={s.node}>
        <div className={s.title}>{node.name}</div>

        {outputs.map(output => (
          <div className={s.output}>
            <div className={s.outputTitle}>{output.name}</div>
            <Socket type="output" bindSocket={bindSocket} io={output} />
          </div>
        ))}

        {controls.map(control => {
          return (
            <Control bindControl={bindControl} control={control} />
          );
        })}

        {inputs.map(input => (
          <div className={s.input}>
            <Socket type="input" bindSocket={bindSocket} io={input}/>
            <div className={s.inputTitle}>{input.name}</div>
            <Control bindControl={bindControl} control={input.control} />
          </div>
        ))}
      </div>
    );
  }
};

export default Node;