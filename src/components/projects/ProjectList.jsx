import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects, deleteProject }) => {
    return (
        <div className='project-list section'>
            <table className='centered'>
            <thead>
                <tr>
                    <th>TDR #</th>
                    <th>Driver Name</th>
                    <th>Quantity Base</th>
                    <th>Date</th>
                    <th>Client Name</th>
                    <th>Prepared By</th>
                </tr>
            </thead>
            <tbody>
                {
                    projects && projects.map((project, index) => {
                        return <ProjectSummary project={project} deleteProject={deleteProject} key={index} index={index} />
                    })
                }
            </tbody>
            </table>
        </div>
    );
}

export default ProjectList;
