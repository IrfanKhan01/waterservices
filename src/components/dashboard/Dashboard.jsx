import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {

  // deleteProject = (index) => {
  //   this.props.deleteProject(index);
  // }

  render() {
    const { projects, auth } = this.props;
    if(!auth.uid) {
      return <Redirect to = '/signin' />
    }
    return (
      <div className='dashboard container'>
        <div className="row">
          <div className="col m1"></div>
            <div className="col s12 m12">
              <ProjectList projects={projects} /> 
            </div>
            <div className="col m1"></div>
            {/* <div className="col s12 m4 offset-m1 teal lighten-5">
                <Notifications />
            </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {
      projects: state.firebase.ordered.projects,
      auth: state.firebase.auth
  }
}
// const mapDispatchToProp = (dispatch) => {
//   return {
//     deleteProject: (index) => dispatch(deleteProject(index))
//   }
// }
export default compose(
  connect(mapStateToProp),
  firebaseConnect(['projects'])
)(Dashboard);
