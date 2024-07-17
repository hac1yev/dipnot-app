import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dipnot_logo from "../../assets/dipnote-logo.svg";

export default function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }} maxWidth="xs">
            <Link to="/" style={{ width: 'fit-content' }}>
              <Box
                component="img"
                sx={{
                  width: 193,
                  height: 43,
                }}
                alt="The house from the offer."
                src={dipnot_logo}
              />
            </Link>
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
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
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
                        size='large'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, textTransform: 'inherit' }}
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