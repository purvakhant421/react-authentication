import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Swal from 'sweetalert2';

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout(Swal.fire({
            title: "Good job!",
            text: "Successfully LogOut",
            icon: "success"
        }), 
        { logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    );
}

export default Logout
