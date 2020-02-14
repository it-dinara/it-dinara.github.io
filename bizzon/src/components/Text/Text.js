import React from 'react';
import Box from '@material-ui/core/Box';


const Text = ({text, ...props}) => (
	<Box fontSize='20px' textAlign='left' p='20px'>
		{text}
	</Box>
)

export default Text;