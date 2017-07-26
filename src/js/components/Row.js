import React, { Component } from 'react';
import Cell from './Cell';
import Input from './Input';
import Select from './Select';
import PropTypes from 'prop-types'

class Row extends Component {
    constructor(props) {
        super(props);
    }

    _getProperInput(val) {
        let type = this.props.adTypes.includes(val) ? 'select' : 'text';

        switch (type) {
        case 'select':
            return (
                <Select
                    adTypes={this.props.adTypes}
                    data={val}
                />
            );
        case 'text':
            return (
                <Input
                    data={val}
                />
            );
        default:
            throw new Error('Unrecognized input type');
        }
    }

    render() {
        return (
            <div className="Row row">
                {
                    Object.keys(this.props.data).map((key, i) => {
                        let inputValue = this.props.data[key];

                        return (
                            <Cell
                                key={i}
                                classes={['col-lg-4', 'text-center']}>

                                {this._getProperInput(inputValue)}

                            </Cell>
                        );
                    })
                }
            </div>
        );
    }
}

Row.defaultProps = {
    data: {}
};

Row.propTypes = {
    adTypes: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.object
};

export default Row;
