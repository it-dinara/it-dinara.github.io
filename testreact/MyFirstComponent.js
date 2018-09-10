import React, { Component } from 'react';
 
class MyFirstComponent extends Component {
    render() {
        return (
            <p>{this.props.number}: Hello from React!</p>
        )
    }
}
 
export default MyFirstComponent;