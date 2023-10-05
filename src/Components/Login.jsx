import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
   

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        e.target.reset();
        navigate("/");

        // create user
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            
        })
        .catch(error => {
            console.error(error)
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
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
                <div className="hero-content flex-col lg:flex-row-reverse mx-8 justify-between">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div>
                            <h3 className="text-4xl text-center font-bold text-gray-400">Login Now!</h3>
                        </div>
                        <form onSubmit={handleLogin} className="card-body">
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
                            <p>Are you New ? Please <Link to={"/Register"}>
                            <button className="=btn-primary py-4">Register</button>
                            </Link></p>
                            <p><button className="btn btn-ghost" onClick={handleGoogleSignIn}>Google SignIn</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;