import React from "react";

export default function Login() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Dev Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <button>Sign In</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    );
}
