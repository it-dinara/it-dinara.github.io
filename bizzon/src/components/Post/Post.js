import React from 'react';
import Box from '@material-ui/core/Box';
import Title from '../Title/Title';
import Text from '../Text/Text';

const Post = (props) => {
	return (
		<Box bgcolor='#e0e0e0' m='10px'>
			<Title title={props.title}/>
			<Text text={props.text}/>
		</Box>
	)
}

export default Post;