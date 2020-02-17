import React, { Component } from 'react';
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actions";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstractCounter(5)}  />
				<hr/>
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
				<ul>
					{this.props.storedResults.map(strResult => (
						<li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)} >{strResult.value}</li>
					))}
				</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({type: ActionTypes.INCREMENT}),
		onDecrementCounter: () => dispatch({type: ActionTypes.DECREMENT}),
		onAddCounter: () => dispatch({type: ActionTypes.ADD, value: 5}),
		onSubstractCounter: (val) => dispatch({type: ActionTypes.SUBSTRACT, value: val}),
		onStoreResult: (result) => dispatch({type: ActionTypes.STORE_RESULT, result: result}),
		onDeleteResult: (id) => dispatch({type: ActionTypes.DELETE_RESULT,resultElId: id}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);