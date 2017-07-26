import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={[...this.props.classes, 'Cell'].join(' ')}>
                {this.props.children}
            </div>
        );
    }
}

export default Cell;
