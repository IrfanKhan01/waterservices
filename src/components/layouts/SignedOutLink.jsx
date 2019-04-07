import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className='right'>
            {/* <li><NavLink to='/signup'>Signup</NavLink></li> */}
            <li><NavLink to='/signin'>
                <a className="waves-effect waves-light btn-small grey darken-3 z-depth-0"><i class="material-icons left">person</i>Login</a>
            </NavLink></li>
        </ul>
    );
}

export default SignedOutLinks;
