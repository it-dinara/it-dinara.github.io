import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from '../../hoc/AsyncComponent';
// import NewPost from '../NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
	return import('../NewPost/NewPost');
})

class Blog extends Component {

	state = {
		auth: true
	}

	render () {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink 
								to = "/posts/"
								exact 
								activeClassName='my-active'
								activeStyle={{
									color: '#fa923f',
									textDecoration: 'underline'
								}}>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink to={{
                                	pathname: '/new-post',
                            	}}>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* < Route  path="/" exact render={() => <h1>Home</h1>}/ >
				< Route  path="/" render={() => <h1>Home 2</h1>}/ > */}
				<Switch>
					{this.state.auth ? < Route path="/new-post" component={AsyncNewPost}/ > : null}
					< Route  path="/posts" component={Posts}/ >
					{/* <Route render={() => <h1>Not Found</h1>}/> */}
					<Redirect from="/" to="/posts"/>
				</Switch>
			</div>
		);
	}
}

export default Blog;