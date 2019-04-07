import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    console.log(props)
    return (
        <ul className='right'>
            <li><NavLink to='/'>All Bills</NavLink></li>
            <li><NavLink to='/createNewBill'>New Bill</NavLink></li>
            <li><a onClick={props.signOut}>
                <a className="waves-effect waves-light btn-small grey darken-3 z-depth-0"><i class="material-icons left">exit_to_app</i>Logout</a>            
            </a></li>
            {/* <li><NavLink to='/' className='btn btn-floating blue lighten-1'>NN</NavLink></li> */}
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);
