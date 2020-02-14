import React from 'react';
import Box from '@material-ui/core/Box';


const Title = ({title}) => (
	<Box fontSize='30px' p='25px 0 15px' fontWeight='800' lineHeight='1' style={{textTransform: 'uppercase'}}>
		{title}
	</Box>
)

export default Title;