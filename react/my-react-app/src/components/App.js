import React, {Component} from 'react'
import ArticleList from "./ArticleList"
import articles from "../fixtures.js"

class App extends Component {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
	            <div className="jumbotron">
		            <h1 className="display-3">
		            	App name
		            	<button className="btn" onClick = {this.revert}>Revert</button>
		            </h1>
	            	<ArticleList articles = { this.state.reverted ? articles.reverse() : articles}/>
	            </div>
	        </div>
        )
    }

    revert = () => this.setState({
    	reverted: !this.state.reverted
    })
}



export default App