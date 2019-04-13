import { Control } from 'rete';
import React from 'react';

class Input extends React.Component {
    change = (e) => {
        console.log(e.target.value);
        this.props.putData(this.props.iKey, e.target.value);
        this.props.editor.trigger('process');
    }

    render() {
        console.log('input props', this.props);
        const { iKey, getData, putData } = this.props;

        return (
            <input type="text" value={getData(iKey)} onChange={this.change} />
        );
    }
};

export default class FieldControl extends Control {
    constructor(emitter, key) {
        super(key);
        this.render = 'react';
        this.key = key;
        console.log(this);
        this.Component = Input;
    }

    setValue(value) {
        console.log('set value', value);
    }
}