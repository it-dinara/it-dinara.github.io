import React, { Component } from 'react';
 
class MySecondComponent extends Component {
    render() {
        return (
            <p>{this.props.number}: My Second React Component.</p>
        )
    }
}
 
export default MySecondComponent;