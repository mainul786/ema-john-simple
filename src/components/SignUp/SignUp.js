import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


const SignUp = () => {
const [error, setError] = useState(null);
const {createUser} = useContext(AuthContext);

const handleSubmit = event =>{
    event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
const confirm = form.confirm.value;
console.log(email, password, confirm);

createUser(email, password)
.then(result =>{
    const user = result.user;
    form.reset();
    console(user);
}).catch(error =>{
    console.error(error);
})

if(password.length < 6){
setError('Password shuld be at least 6 charecter!!');
return;
}
if(password !== confirm){
    setError('Your password and confirm password did`t match!!');
    return;
}

}

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='password' required />
                </div>
                <button className='btn-submit' type="submit">SignUp</button>
            </form>
            <p>New to ema john <Link to='/signUp'>Create a new Account</Link></p>
           <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;