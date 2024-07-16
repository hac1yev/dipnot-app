import { useRef, useState } from 'react';
import { Avatar, Box, Divider, Grid, Input, Typography } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const ProfileRightbar = () => {
  const [profilePicture, setProfilePicture] = useState('https://avatars.githubusercontent.com/u/99089581?v=4');
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid item className="profile-list">
      <Box sx={{ background: '#fff', p: 2 }}>

        <Box display="flex" alignItems="center" gap="10px">
          <Input
            type="file"
            inputRef={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
          />
          <Box onClick={handleClick} className="profile-img-wrap" position="relative">
            <Avatar className='profile-img' src={profilePicture} />
            <Box className="profile-img-icon" sx={{ position: 'absolute', bottom: 0, right: 0 }}>
              <CreateOutlinedIcon />
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">İlkin Hacıyev</Typography>
            <Typography variant="subtitle1">ilkinhaciyev@gmail.com</Typography>
          </Box>
        </Box>

        <Typography variant="subtitle1" sx={{ my: 2 }}>React development. Open source is great for many things.</Typography>

        <Box sx={{ display: 'flex', gap: '40px' }}>
          <Box className="flex-column" gap="7px">
            <Typography variant="h4">49</Typography>
            <Typography variant="subtitle2" sx={{ color: '#000' }}>Üzv</Typography>
          </Box>
          <Box className="flex-column" gap="7px">
            <Typography variant="h4">230</Typography>
            <Typography variant="subtitle2" sx={{ color: '#000' }}>Post</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
      </Box>
    </Grid>
  );
};

export default ProfileRightbar;