import React from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';

const ProjectSummary = ({ project, deleteProject }) => {
    console.log(project.value)
    const { quantityBase, driverName, dateTime, clientName, TDRNo, preparedBy } = project.value    
    return (
            <tr>
                <td>{ TDRNo }</td>
                <td>{ driverName }</td>
                <td>{ quantityBase }</td>
                <td>{ dateTime }</td>
                <td>{ clientName }</td>
                <td>{ preparedBy }</td>
            </tr>

        // <div className="card z-depth-0.5 project-summary">
        //     <div className="card-content grey-text text-darken-3">
        //         <span className="card-title">{project.value.title}</span>
        //         <p>{project.value.content}</p>
        //         <span className="grey-text">Sep 29, 18</span>
        //         <button onClick={() => deleteProject(project.value.id) } className="btn right">Delete</button>
        //     </div>
        // </div>
    );
}

const mapDispatchToProp =(dispatch) => {
    return {
        deleteProject: (index) => dispatch(deleteProject(index))
    }
}

export default connect(null, mapDispatchToProp)(ProjectSummary);
