import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject, projectDetail } from '../../store/actions/projectActions';
import { Redirect, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import '../../styles/style.css';

class CreateProject extends Component {
  state = {
    quantityBase:'',
    dateTime: '',
    contractorName:'SAMAD INTERPRISES',
    driverName:'',
    cnic:'',
    deliveryPoint:'',
    preparedBy:'',
    TDRNo:'',
    MOUNo:'',
    vehicleNo:'',
    clientName:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSumit = (e) => {
    e.preventDefault();
    const { 
      quantityBase, 
      dateTime, 
      driverName, 
      contractorName, 
      cnic, 
      deliveryPoint, 
      preparedBy, 
      TDRNo, 
      MOUNo, 
      vehicleNo, 
      clientName } = this.state;

      if (quantityBase === "" || driverName === "" || cnic === "" || dateTime === ''
       || deliveryPoint === "" || preparedBy === "" || TDRNo === "" ||
        MOUNo === "" || vehicleNo === "" || clientName === "") {
        toast.error('Please provide complete data, You have some empty fields !', {
          position: toast.POSITION.TOP_RIGHT
        })
    
      } else {
        toast.success("Bill has been uploaded successfully !", {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        this.props.createProject(this.state);
        this.props.projectDetail(this.state);

        this.setState({  
          quantityBase:'',
          dateTime: '',
          contractorName:'SAMAD INTERPRISES',
          driverName:'',
          cnic:'',
          deliveryPoint:'',
          preparedBy:'',
          TDRNo:'',
          MOUNo:'',
          vehicleNo:'',
          clientName:''
      })
        
      this.props.history.push(`/project/ ${TDRNo}`)
    }
  }

  render() {    
    const { contractorName } = this.state;
    const { auth } = this.props;
    if(!auth.uid) {
      return <Redirect to='/signin' />
    }

    return (
      <div className='container'>
        <form onSubmit={this.handleSumit}>
            <h5 className="blue-text center">Create Billing Copy</h5>
            <div className='row'>
              <div className='input-field col m6 s12'>
                <label htmlFor="quantityBase">Quantity Base</label>
                <input type="text" id="quantityBase" onChange={this.handleChange}/>
              </div>
              <div className='input-field col m6 s12'>
                <label htmlFor="TDRNo">TDR #</label>
                <input type="text" id="TDRNo" onChange={this.handleChange}/>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col m6 s12'>
                <label htmlFor="dateTime">Date Time</label>
                <input type="text" id="dateTime" onChange={this.handleChange}/>
              </div>
              <div className='input-field col m6 s12'>
                <label htmlFor="MOUNo">MOU No</label>
                <input type="text" id="MOUNo" onChange={this.handleChange}/>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col m6 s12'>
                {/* <label htmlFor="contarctor-name">Contractor Name</label> */}
                <input type="text" id="contarctorName" value={contractorName} onChange={this.handleChange} />
              </div>
              <div className='input-field col m6 s12'>
                <label htmlFor="vehicleNo">Vehicle No</label>
                <input type="text" id="vehicleNo" onChange={this.handleChange}/>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col m6 s12'>
                <label htmlFor="driverName">Driver Name</label>
                <input type="text" id="driverName" onChange={this.handleChange}/>
              </div>
              <div className='input-field col m6 s12'>
                <label htmlFor="clientName">Client Name</label>
                <input type="text" id="clientName" onChange={this.handleChange}/>
              </div>
            </div>

            <div className="row">
              <div className='input-field col m6 s12'>
                <label htmlFor="cnic">CNIC</label>
                <input type="text" id="cnic" onChange={this.handleChange} />
              </div>
              <div className="input-field col m6 s12">
                <label htmlFor="preparedBy">Prepared By</label>
                <input type="text" id='preparedBy' onChange={this.handleChange} />
              </div>
            </div>

            <div className="row">
              <div className="input-field col m12">
                  <label htmlFor="deliveryPoint">Delivery Point</label>
                  <input type="text" id='deliveryPoint' onChange={this.handleChange}/>
              </div>
            </div>
          
            <div className="input-field">
                <button style={{marginBottom:20}} className="wave-effect wave-light btn blue z-depth-0 right">Create</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    projectDetail: (index) => dispatch(projectDetail(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(withRouter( CreateProject ));