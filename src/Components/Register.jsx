
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
   

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
        e.target.reset();
        // create user in firebase
        createUser(email, password) 
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-7 lg:flex-row-reverse mx-2 justify-between">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            <h3 className="text-4xl text-center font-bold text-gray-400">Register Now!</h3>
                        </div>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-sm py-4">Already Have Account ? <Link to={"/Login"}>
                            <button className="=btn-primary">Login</button>
                            </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;