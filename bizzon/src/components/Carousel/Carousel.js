import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Post from '../Post/Post';


class Carousel extends Component {
	state = {
		posts: []
	}

	componentDidMount () {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				this.setState({posts: response.data})
			});
	}

	render() {
		const settings = {
		  dots: false,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  arrows: true,
		  height: 'auto'
		};
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
				<Slider {...settings}>
					{posts.map((elem, i) => (
						<Box key={elem.title}>
							{elem}
						</Box>
					))}
				</Slider>
			</Box>
		)
	}
}

export default Carousel;