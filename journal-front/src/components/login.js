import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
    }

    handleChange = (event) => {   
        this.setState({[event.target.name]: event.target.value});  
    }

    login = async (email, pass) => {
        await axios.post('/auth/authenticate', {email, pass}).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err.response.data.error));
    }

    render() {
        return (
            <Styles>
                <div className="out-box">
                    <div className="middle-box">
                        <div className="inner-box">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handleChange} name="pass" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={() => this.login(this.state.email, this.state.pass)}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}

const Styles = styled.div`
.out-box {
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    width: 100%;
}

.middle-box {
    display: table-cell;
    vertical-align: middle;
}

.inner-box {
    margin-left: auto;
    margin-right: auto;
    border-top-style: solid;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #000068;
    border-radius: 10%;
    max-width: 500px;
    padding: 30px;
}
`;

export default Login;