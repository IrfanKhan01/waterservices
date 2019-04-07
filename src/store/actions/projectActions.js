
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyc call to database
        //my code start
        console.log(project);
        const firebase = getFirebase();
       firebase.push('projects', project)
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project })
            }).catch(error => dispatch({ type: 'CREATE_PROJECT_ERROR', error }))
        //my code ended


        // const firestore = getFirestore();
        // firestore.collection('projects').add({
        //     ...project,
        //     authorFirstName: 'Ahmad',
        //     authorLastName: 'Khan',
        //     authorId: 123456,
        //     createdAt: new Date()
        // }).then(() => {
        //         dispatch({
        //             type: 'CREATE_PROJECT', project })
        // }).catch((error) => {
        //     dispatch({ type: 'CREATE_PROJECT_ERROR', error})
        // })
    }
}

export const projectDetail = (projectDetails) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        console.log(projectDetails);
        dispatch({type: 'PROJECT_DETAIL', projectDetails});
    }
}


export const deleteProject = (index) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_PROJECT',
            index
        })
    }
}
