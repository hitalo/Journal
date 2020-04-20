import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

class Home extends Component {

    data = [{
        id: 1,
        name: "Mark",
        info: "something"
    }, {
        id: 2,
        name: "Paul",
        info: "last modified"
    }, {
        id: 3,
        name: "Hit",
        info: "cool"
    }];

    render() {
        return (
            <Styles>
                <Button variant="primary" className="new-journal-button">New Journal</Button>
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.data.map(journal => {
                                return (
                                    <tr key={journal.id} onClick={() => this.props.history.push("/u/editor")}>
                                        <td>{journal.id}</td>
                                        <td width="70%">{journal.name}</td>
                                        <td>{journal.info}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Styles>
        )
    }
}

const Styles = styled.div`

.new-journal-button {
    margin: 10px;
    margin-right: 0px;
    float: right;
}

`;

export default Home;