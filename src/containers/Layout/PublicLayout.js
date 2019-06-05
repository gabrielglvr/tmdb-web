import React, { Component } from 'react'
import Nav from '../../components/NavBar/Nav';

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        
        return (
            <>
                <Nav />
                <div className="main">
                    <Component route={route} />
                </div>
            </>
        )
    }
}
