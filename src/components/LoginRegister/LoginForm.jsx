import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dipnot_logo from "../../assets/dipnote-logo.svg";
import PasswordInput from './PasswordInput';
import { useState } from 'react';

export default function LoginForm() {
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };    

    return (
        <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }} maxWidth="xs">
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
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4">
                    Giriş et
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                    Daxil olmaq üçün e-poçtunuzu daxil edin
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                    <PasswordInput password={password} handlePassword={handlePassword} />
                    <Button
                        className='login-button'
                        size='large'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Daxil ol
                    </Button>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <Link to="/register" variant="body2" style={{ textDecoration: 'none', color: 'rgba(5, 104, 214, 1)' }}>
                            Qeydiyyat
                        </Link>
                    </Box>
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 3 }}>
                        By clicking continue, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}