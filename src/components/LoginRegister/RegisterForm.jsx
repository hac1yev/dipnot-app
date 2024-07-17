import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dipnot_logo from "../../assets/dipnote-logo.svg";
import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';
import facebook from '../../assets/facebook.svg';
import { IconButton } from '@mui/material';

const RegisterForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }} maxWidth="xs">
            <Box
                component="img"
                sx={{
                    width: 193,
                    height: 43,
                }}
                alt="The house from the offer."
                src={dipnot_logo}
            />
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4">
                    Qeydiyyatdan keçin
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 1, mt: 1 }}>
                    Qeydiyyatdan keçmək üçün aşağıdakı məlumatları daxil edin
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="name"
                        label="Ad"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password"
                        label="Şifrə"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        className='register-button'
                        size='large'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Daxil ol
                    </Button>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <Link to="/login" variant="body2" style={{ textDecoration: 'none', color: 'rgba(5, 104, 214, 1)' }}>
                            Hesabınız var? Giriş
                        </Link>
                    </Box>
                    <Box className="space-between" sx={{ gap: '8px', my: 2 }}>
                        <Box component="span" sx={{ flex: 1, width: '100%', height: '1px', display: 'block', bgcolor: 'rgba(130, 130, 130, 0.2)' }}></Box>
                        <Box component="span" sx={{ color: 'rgba(130, 130, 130, 1)' }}>və ya daxil ol</Box>
                        <Box component="span" sx={{ flex: 1, width: '100%', height: '1px', display: 'block', bgcolor: 'rgba(130, 130, 130, 0.2)' }}></Box>
                    </Box>
                    <Box className="space-between" sx={{ gap: '10px', mt: 3 }}>
                        <Box className="flex-column" sx={{ width: '100%', height: '50px', border: '1px solid rgba(188, 190, 192, 1)', borderRadius: '10px' }}>
                            <IconButton sx={{ width: '100%', height: '100%', p: 0, borderRadius: '10px' }}>
                                <Box component="img" src={google} />
                            </IconButton>
                        </Box>
                        <Box className="flex-column" sx={{ width: '100%', height: '50px', border: '1px solid rgba(188, 190, 192, 1)', borderRadius: '10px' }}>
                            <IconButton sx={{ width: '100%', height: '100%', p: 0, borderRadius: '10px' }}>
                                <Box component="img" src={apple} />
                            </IconButton>
                        </Box>
                        <Box className="flex-column" sx={{ width: '100%', height: '50px', border: '1px solid rgba(188, 190, 192, 1)', borderRadius: '10px' }}>
                            <IconButton sx={{ width: '100%', height: '100%', p: 0, borderRadius: '10px' }}>
                                <Box component="img" src={facebook} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 3 }}>
                        By clicking continue, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterForm;