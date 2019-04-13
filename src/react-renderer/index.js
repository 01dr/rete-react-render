import React from 'react';
import ReactDOM from 'react-dom';

import Node from './Node/index';


function install(editor) {
  editor.on('rendernode', ({ el, node, component, bindSocket, bindControl }) => {
    if (component.render && component.render !== 'react') return;

    ReactDOM.render(
      <Node 
        {...component.props} 
        node={node} 
        editor={editor} 
        bindSocket={bindSocket} 
        bindControl={bindControl}
      />,
      el
    );
  });

  editor.on('rendercontrol', ({ el, control }) => {
    if (control.render && control.render !== 'react') return;

    ReactDOM.render(
      <control.Component 
        {...control.props} 
        iKey={control.key}
        editor={editor}
        getData={control.getData.bind(control)} 
        putData={control.putData.bind(control)}
      />,
      el
    );
  });
};

export default {
    name: 'react-render',
    install
}