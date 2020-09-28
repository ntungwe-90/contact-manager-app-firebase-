export const addUser = (user) => {
    return ( dispatch, state,{ getFirestore}) => {
        getFirestore()
        .collection( 'user')
        .add(user)
        .then((doc) => {
           dispatch({
            type: 'ADD_USER',
                payload: user, 
           });
        });
    };
};

export const deleteUser = (user_id) => {
    return{
        type: 'DELETE_USER',
        payload: user_id
    }
}

export const editUser = (user_id, updated_info) => {
    return{
        type: 'EDIT_USER',
        user_id: user_id,
        updated_info:updated_info
    }
}