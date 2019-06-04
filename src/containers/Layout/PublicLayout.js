import React, { Component } from 'react'

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Component route={route} />
                    </div>
                </div>
            </div>
        )
    }
}
