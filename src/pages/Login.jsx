import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { signInUser } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({ email, password });
        signInUser(email, password).then(result => {
            const user = result?.user;
            // console.log(user);
            navigate(`${location.state? location.state: '/'}`);
        }).catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode, errorMessage)
            setError(errorCode);
        });

    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-9">
                <h1 className=" text-2xl font-semibold text-center">Login your account</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input required type="email" name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input required type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-red-500 text-sm'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center pt-5'>Don't have an account? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;