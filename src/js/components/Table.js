import React, { Component } from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Welcome',
        };
    }

    render() {
        return (
            <div className="table container">
                {this.props.rows.map((row, i) => {
                    return (
                        <Row data={row} adTypes={this.props.adTypes} key={i} />
                    );
                })}
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}

Table.defaultProps = {
    rows: []
};

Table.propTypes = {
    adTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.array.isRequired
};

export default Table;
