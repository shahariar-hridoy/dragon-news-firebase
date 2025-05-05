
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState('')

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more than 5 character.');
            return;
        }
        else {
            setNameError('')
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({ name, photo, email, password });
        createUser(email, password).then(result => {
            const user = result.user;
            updateUser({
                displayName: name,
                photoURL: photo
            }).then(() => {
                setUser({
                    ...user, displayName: name,
                    photoURL: photo
                });
                navigate('/')
            }).catch((error) => {
                console.log(error);
                setUser(user);
            })

            // console.log(user);
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-9">
                <h1 className=" text-2xl font-semibold text-center">Register your account</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input required type="text" name='name' className="input" placeholder="Your Name" />
                        {nameError && <p className='text-xs text-red-500'>{nameError}</p>}

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input required type="text" name='photo' className="input" placeholder="Photo Url" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input required type="email" name='email' className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input required type="password" name='password' className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already have an account? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;