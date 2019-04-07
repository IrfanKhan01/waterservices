
const iniState = {
    projects: []
};

const projectReducer = (state = iniState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
            
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.error)
            return state;

        case 'PROJECT_DETAIL':
            console.log('project detail', action.projectDetails);
            return state;

        default:
            return state;
    }
    
}

export default projectReducer;