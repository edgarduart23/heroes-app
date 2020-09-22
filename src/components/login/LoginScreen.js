import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        //console.log('click');
        history.push('/');
        history.replace('/');
        
    }
    return (
        <div className="container mt-500">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}    

            >
                Login
            </button>
        </div>
    )
}
