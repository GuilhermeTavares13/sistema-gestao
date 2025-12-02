import './SignUp.css';
export default function SignUp() {
    return  (
        <form className='login'>
            <div className="container mt-3">
                <h2>Login</h2>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label for="email" className="form-label">E-mail</label>
                        {/* value={ email } onChange={ e => setEmail(e.target.value) } */}
                        <input type="email" className="form-control" id="email"  required />
                    </div>
                    <div className="col-md-12">
                        <label for="password" className="form-label">Senha</label>
                        {/* value={ password } onChange={ e => setPassword(e.target.value) } */}
                        <input type="password" className="form-control" id="password"  required />
                    </div>
                    <div className="col-md-12">
                        <label for="confirmPassword" className="form-label">Confirme Senha</label>
                        {/* value={ password } onChange={ e => setPassword(e.target.value) } */}
                        <input type="password" className="form-control" id="password"  required />
                    </div>
                    <div className="col-md-12">
                        {/* onClick={submitData} */}
                        <button type="submit" className="btn btn-primary" >Entrar</button>
                        <a href="/auth/signup" className="btn btn-secondary">Cadastrar</a>
                    </div>
                </div>
            </div>
        </form>
    );
}