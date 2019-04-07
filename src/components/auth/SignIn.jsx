import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.signIn(this.state);
    }
  render() {

    const { authError, auth } = this.props;
    if (auth.uid) {
        return <Redirect to='/' />
    }
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <div className="row" style={{height:'80vh', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div className="col m2"></div>
                <div className="col m8 card">
                    {/* <h5 className='grey-text text-darken-3 card-title' style={{backgroundColor:'f0f0f0'}} >Sign In</h5> */}
                    <div className="card-content">
                        <span className='card-title center'>Sign in</span>
                        <div className='input-field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="password">Password
                            </label>
                            <input type="password" id='password' onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="card-action">
                        {/* <div className='input-field center'> */}
                            <button style={{marginBottom:15}} className="btn blue lighten-1 z-depth-0 right">Login</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
                <div className="col m2"></div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);