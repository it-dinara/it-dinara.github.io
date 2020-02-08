import React from 'react';
import Box from '@material-ui/core/Box';


const Title = (props) => (
	<Box fontSize='40px' p='20px' fontWeight='800'>
		{props.title}
	</Box>
)

export default Title;