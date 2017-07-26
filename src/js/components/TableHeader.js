import React, { Component } from 'react';
import Row from './Row';
import Cell from './Cell';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class TableHeader extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Row>
                <Cell classes={['col-lg-3', 'col-lg-offset-3']}>

                </Cell>
                <Cell classes={['col-lg-3']}>

                </Cell>
            </Row>
        );
    }
}

TableHeader.defaultProps = {
    
};

TableHeader.propTypes = {

};

export default TableHeader;
