import React from 'react';
import Box from '@material-ui/core/Box';
import Title from '../Title/Title';
import Text from '../Text/Text';

const Post = ({ title, text }) => (
 <Box m='10px'>
  <Title title={title}/>
  <Text text={text}/>
 </Box>
)

export default Post;