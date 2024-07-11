import { ListItem,ListItemAvatar,ListItemText,Avatar, List, Box, Typography, IconButton, Paper } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const PostComments = () => {
  return (
    <List sx={{ p: 2 }}>
        <ListItem sx={{ p: 0 }}>
            <Paper className='comment-paper'>
                <ListItemAvatar>
                    <Avatar alt="User Name" src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/2023-Ford-Mustang-Dark-Horse-red-press-image-1001x565p-(1).jpg" />
                </ListItemAvatar>
                <Box>
                    <ListItemText primary="Elvin Cabbarlı" secondary="5 saat öncə" sx={{ mb: 0 }} className='comment-header-text' />
                    <Typography variant='subtitle1'>Yaxşı fikir! böyük işə davam edin!Yaxşı fikir! böyük işə davam edin!Yaxşı fikir! böyük işə davam edin!Yaxşı fikir! böyük işə davam edin!Yaxşı fikir! böyük işə davam edin!Yaxşı fikir! böyük işə davam edin!Yaxşı fikir! böyük işə davam edin!</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '8px' }}>
                        <Typography variant='subtitle3' sx={{ cursor: 'pointer' }}>32 Bəyənmə</Typography>
                        <Typography variant='subtitle3' sx={{ cursor: 'pointer' }}>Cavab yaz</Typography>
                    </Box>
                </Box>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            </Paper>
            <Paper className='reply-paper'>
                
            </Paper>
        </ListItem>
    </List>
  );
};

export default PostComments;