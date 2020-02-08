import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Post from '../Post/Post';


class Carousel extends Component {
	state = {
		posts: []
	}

	componentDidMount () {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				this.setState({posts: response.data})
				// console.log(response)
			});
	}

	render() {
		const posts = this.state.posts.map((item, i) => {
			return (
				<Post 
					key={i}
					title={item.title}
					text={item.body}
				/>
				)
		});

		return (
			<Box width='500px' m='10px auto'>
				{posts}
			</Box>
		)
	}
}

export default Carousel;