import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Logout from './Logout';
import Swal from 'sweetalert2';

const Login = () => {

    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    console.log(user);

    if (isAuthenticated) {
        Swal.fire({
            title: "Good job!",
            text: "Successfully LogIn",
            icon: "success"
        });
    }



    return (
        <div>
            {
                isAuthenticated ? (
                    <>
                        <h1>{"Name = " + user.given_name}</h1>
                        <h1>{"subName = " + user.family_name}</h1>
                        <h1>{"Email = " + user.email}</h1>
                        <Logout />
                    </>
                ) : (
                    < button onClick={() => loginWithRedirect()}>Log In</button>
                )
            }

        </div >
    )
}

export default Login
