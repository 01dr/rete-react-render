import Rete from "rete";
import FieldControl from './FieldControl';

import Socket from './sockets';

class NumComponent extends Rete.Component {
  constructor(CustomFieldControl) {
    super("Number");
    this.CustomFieldControl = CustomFieldControl;
  }

  async builder(node) {
    const Field = this.CustomFieldControl || FieldControl;
    const out1 = new Rete.Output("num", "Number", Socket.num);

    return node.addControl(new Field(this.editor, 'num', 'number')).addOutput(out1);
  }

  worker(node, inputs, outputs) {
    console.log('NumComponent data', node.data.num);
    outputs["num"] = node.data.num;
  }
}

export default NumComponent;