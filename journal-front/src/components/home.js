import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Home extends Component {

    testAuth = () => {
        axios.post("/projects", {}, {withCredentials: true}).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data.error);
        });
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Button variant="primary" onClick={this.testAuth}>Test Auth</Button>
            </div>
        )
    }
}

export default Home;