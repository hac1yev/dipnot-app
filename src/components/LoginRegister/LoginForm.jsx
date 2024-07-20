import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dipnot_logo from "../../assets/dipnote-logo.svg";
import PasswordInput from './PasswordInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../../store/loginSlice';


export default function LoginForm() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            username: email,
            password: password,
            scope: rememberMe,
        };

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        try {
            const response = await axios.post(
                "http://195.35.56.202:8080/login",
                formData,
                config
            );
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            dispatch(loginSuccess(response.data));
            if (response.status === 200) {
                navigate("/personal");
            }
        } catch (error) {
            console.error("Sign-in failed!", error.response.data);
        }
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
                <Typography variant="h3">
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
                        placeholder='admin@gmail.com'
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
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
                    <div style={{ display: "flex", gap: "15px" }}>
                        <label htmlFor="remember">Məni xatırla</label>
                        <input
                            type="checkbox"
                            onChange={(e) => setRememberMe(e.target.checked)}
                            value="remember"
                            id="remember"
                            checked={rememberMe}
                            color="primary"
                        />
                    </div>
                    <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 3 }}>
                        Davam et düyməsini klikləməklə, <b>Xidmət Şərtlərimiz</b> və <b>Məxfilik Siyasətimizlə</b> razılaşırsınız
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}