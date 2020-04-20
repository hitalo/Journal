import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from './auth';
import MainNavbar from './components/navbar';

// const PrivateRoutes = ({component: Component, ...rest}) => (
//     <Route {...rest} render={props => 
//         isAuthenticated() ? (
//             <Component { ...props } />
//         ) : (
//             <Redirect to={{ pathname: "/", state: { from: props.location }} } />
//         )
//     }/>
// )

class PrivateRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allow: false,
            loading: true
        }
    }

    componentDidMount() {
        isAuthenticated().then(res => {
            this.setState({ allow: res.data.status, loading: false })
        }).catch(_ => {
            this.setState({ allow: false, loading: false })
        })
    }

    render() {

        if (this.state.loading) {
            return <div>Loading..</div>
        }

        const { component: Component, ...rest } = this.props;
        return (
            <Styles>
                <Route {...rest} render={props => (
                    this.state.allow ? (
                        <div>
                            <MainNavbar />
                            <Row className="justify-content-md-center"><Col md={8}>
                                <Component {...props} />
                            </Col></Row>
                        </div>
                    ) : (
                            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                        )
                )} />
            </Styles>
        )
    }
}

const Styles = styled.div`


`;

export default PrivateRoutes;