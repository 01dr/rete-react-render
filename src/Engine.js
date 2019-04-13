import Rete from "rete";
import ConnectionPlugin from "rete-connection-plugin";
import ReactRenderPlugin from './react-renderer';
import DockPlugin from 'rete-dock-plugin';

import React, { Component } from "react";
import NumComponent from "./NumComponent";
import AddComponent from './AddComponent';

export default class Engine extends Component {
  engineRef = null;
  dockRef = null;

  async componentDidMount() {
    const editor = new Rete.NodeEditor("rete-react-test@1.0.0", this.engineRef);
    editor.use(ConnectionPlugin);
    editor.use(ReactRenderPlugin);
    editor.use(DockPlugin, {
      container: this.dockRef, 
      plugins: [ReactRenderPlugin]
    });

    const components = [new NumComponent(), new AddComponent()];
    const engine = new Rete.Engine("rete-react-test@1.0.0");

    components.map(c => {
      editor.register(c);
      engine.register(c);
    });

    editor.on("process nodecreated noderemoved connectioncreated connectionremoved", async () => {
      await engine.abort();
      await engine.process(editor.toJSON());
    });
  }

  render() {
    return (
      <div className="editor">
        <div className="container">
            <div 
              className="node-editor" 
              ref={ref => (this.engineRef = ref)} 
            />
        </div>

        <div 
          className="dock" 
          ref={ref => (this.dockRef = ref)} 
        />
      </div>
    );
  }
}