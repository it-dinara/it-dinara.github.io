import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Post from '../Post/Post';
import Picture from '../Picture/Picture';


class Carousel extends Component {
	state = {
		posts: [],
		photos: [],
	}

	componentDidMount () {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				const posts = response.data.slice(0, 10);
				this.setState({posts: posts})
			});
		axios.get('https://jsonplaceholder.typicode.com/photos')
			.then(response => {
				const photos = response.data.slice(0, 10);
				this.setState({photos: photos})
			});
	}

	render() {
		const settings = {
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
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

		const photos = this.state.photos.map((item, i) => {
			return (
				<Picture
					key={i}
					url={item.url}
				/>
			)
		});


		return (
			<Box width='500px' m='10px auto'>
				<Slider {...settings}>
					{photos.map((elem, i) => (
						<Box key={i}>
							<Box bgcolor='#e0e0e0' p='20px'>
								{elem}
								{posts[i]}
							</Box>
						</Box>
					))}
				</Slider>
			</Box>
		)
	}
}

export default Carousel;