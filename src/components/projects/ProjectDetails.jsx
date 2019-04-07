import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BillCopy from './BillCopy';
import ReactToPrint from 'react-to-print';
import '../../styles/style.css';

class ProjectDetails extends Component {
  
    render() {
        console.log(this.props.project)
        const id = this.props.match.params.id;
        if(!this.props.auth.uid) {
            return <Redirect to='/signin' />
        }
        return (
        <div>
            <BillCopy data={this.props.project} ref={(el) => (this.compRef = el)} />
            {/* <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.compRef}
            /> */}
      </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        project: state.projectDetail
    }
}
export default connect(mapStateToProps)(ProjectDetails);
