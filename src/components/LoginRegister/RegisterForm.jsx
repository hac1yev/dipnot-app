import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dipnot_logo from "../../assets/dipnote-logo.svg";
// import google from '../../assets/google.svg';
// import apple from '../../assets/apple.svg';
// import facebook from '../../assets/facebook.svg';
// import { IconButton } from '@mui/material';
import { useState } from 'react';
import PasswordInput from './PasswordInput';
import axios from 'axios';

const RegisterForm = () => {
    const [password, setPassword] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate();
    // const [checked, setIsChecked] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = {
            email: data.get("email"),
            password: data.get("password"),
            username: data.get("username"),
            last_name: data.get("surname"),
            first_name: data.get("name"),
            get_email: false,
        };

        try {
            const response = await axios.post(
                "http://195.35.56.202:8080/register",
                formData,
                {
                    mode: "no-cors",
                }
            );
            navigate("/signin");
            return response;
        } catch (error) {
            console.error("Registration failed!", error);
        }
    };

    return (
        <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }} maxWidth="xs">
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
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3">
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
                        id="surname"
                        label="Soy Ad"
                        name="surname"
                        autoComplete="surname"
                        autoFocus
                    />

                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        label="İstifadəçi Adı"
                        name="username"
                        autoComplete="username"
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
                    />
                    <PasswordInput password={password} handlePassword={handlePassword} />
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
                        sx={{ mt: 2, mb: 1 }}
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
                        {/* <Box component="span" sx={{ color: 'rgba(130, 130, 130, 1)' }}>və ya daxil ol</Box> */}
                        <Box component="span" sx={{ flex: 1, width: '100%', height: '1px', display: 'block', bgcolor: 'rgba(130, 130, 130, 0.2)' }}></Box>
                    </Box>
                    {/* <Box className="space-between" sx={{ gap: '10px', mt: 3 }}>
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
                    </Box> */}
                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                        Qeydiyyatdan keçərək <b>Xidmət Şərtlərimiz</b> və <b>Məxfilik Siyasətimizlə</b> razılaşırsınız
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterForm;