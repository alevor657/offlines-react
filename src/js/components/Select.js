import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select
                className='Input form-control'
                defaultValue={this.props.data}
            >
                {
                    this.props.adTypes.map((type, i) => {
                        return (
                            <option
                                className="Option"
                                key={i}
                                value={type}
                            >
                                {type}
                            </option>
                        );
                    })
                }
            </select>
        );

    }
}

Select.defaultProps = {
    data: 'Роль рекламы',
};

Select.PropTypes = {
    adTypes: PropTypes.array.isRequired,
    data: PropTypes.string
};

export default Select;
