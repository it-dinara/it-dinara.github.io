import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import axios from '../../axios';
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
		axios.get('/posts')
			.then(response => {
				const posts = response.data.slice(0, 10);
				this.setState({posts: posts});
			})
			.catch(error => {
				this.setState({error: true});
			})

		axios.get('/photos')
			.then(response => {
				const photos = response.data.slice(0, 10);
				this.setState({photos: photos});
			})
			.catch(error => {
				this.setState({error: true});
			})
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
					key={item.url}
					url={item.url}
				/>
			)
		});

		let content = <Slider {...settings}>
					{photos.map((elem, i) => (
						<Box key={Math.random()}>
							<Box bgcolor='#e0e0e0' p='20px'>
								{elem}
								{posts[i]}
							</Box>
						</Box>
					))}
				</Slider>
		if (this.state.error) {
			content = <Box fontSize='20px' color='red'>Something went wrong</Box>
		}
		return (
			<Box width='500px' m='10px auto'>
				{content}
			</Box>
		)
	}
}

export default Carousel;