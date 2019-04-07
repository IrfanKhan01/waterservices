import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signin' component={SignIn} />
              {/* <Route path='/signup' component={SignUp} /> */}
              <Route path='/createNewBill' component={CreateProject} />
            </Switch>

            <ToastContainer />
          </div>
        </BrowserRouter>
    );
    
  }
}

export default App;
