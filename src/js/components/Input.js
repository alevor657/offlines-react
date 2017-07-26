import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className='Input form-control' defaultValue={this.props.data}/>
        );
    }
}

Input.defaultProps = {
    data: '',
};

Input.PropTypes = {
    data: PropTypes.string
};

export default Input;
