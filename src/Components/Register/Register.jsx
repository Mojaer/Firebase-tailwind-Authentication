
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Register = () => {

    const { user, createUser } = useContext(authContext)
    // console.log(user)

    const handleRegister = even => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password, name);

        createUser(email, password)
            .then(user => { console.log(user.user.email) })
            .catch(err => { console.log(err) });

        form.reset()

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please register </h1>

                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' autoComplete="on" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' autoComplete="on" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' autoComplete="on" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;