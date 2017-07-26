import React, { Component, PropTypes } from 'react';
import Table from '../components/Table';
import TableHeader from '../components/TableHeader';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="table-wrapper">
                <br />
                <br />
                <TableHeader />
                <br />
                <br />
                <Table rows={this.props.data} adTypes={this.props.adTypes} />
            </section>
        );
    }
}
