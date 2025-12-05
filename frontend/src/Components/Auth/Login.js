import './Login.css';
import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = (e) => {
        e.preventDefault();
        console.log('on submitdata');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ teste:'teste' })
        };
        fetch('http://localhost:4000/login',requestOptions)
        .then(response => response.json())
        .catch(err => console.log(err));
    }
    
    return  (
        <form className='login' onSubmit={submitData}>
            <div className="container mt-3">
                <h2>Login</h2>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" value={ email } onChange={ e => setEmail(e.target.value) }  required />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="password" value={ password } onChange={ e => setPassword(e.target.value) } required />
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Entrar</button>
                        <a href="/auth/signup" className="btn btn-secondary">Cadastrar</a>
                    </div>
                </div>
            </div>
        </form>
    );
}