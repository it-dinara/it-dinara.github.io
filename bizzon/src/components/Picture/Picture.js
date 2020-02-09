import React from 'react';

import Box from '@material-ui/core/Box';
import Image from 'material-ui-image'


const Picture = (props) => (
	<Box width='200px' m='0 auto'>
		<Image src={props.url}/>
	</Box>
)

export default Picture;