import React from 'react';
import Box from '@material-ui/core/Box';


const Text = (props) => (
	<Box fontSize='20px' textAlign='left' p='20px'>
		{props.text}
	</Box>
)

export default Text;