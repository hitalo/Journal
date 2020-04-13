import React, { Component } from 'react';

import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from './auth';

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
            <Route {...rest} render={props => (
                this.state.allow ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )} />
        )
    }
}

export default PrivateRoutes;