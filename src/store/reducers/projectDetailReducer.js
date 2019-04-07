const iniState = {

}

const projectDetailReducer = (state = iniState, action) => {
    switch(action.type) {
        case 'PROJECT_DETAIL':
            return state = action.projectDetails 
            
        default:
            return state;
    }
}

export default projectDetailReducer;