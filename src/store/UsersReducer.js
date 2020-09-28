import {v4 as uuid} from 'uuid';

const  initialState = {
    users : [
        {
          id: "1",
          name: "Calvin",
         email: "calvin@email.com",
         tell: "14", 
        },

        {
          id:"2",
          name: "Doreen",
         email: "doreen@email.com",
         tell: "14", 
        },

        {
          id: "3",
          name: "Irene",
          email: "irene@email.com",
          tell: "14", 
        }
      ]
    
};




const UsersReducers = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_USER":
            const newUser = {
              id: uuid(),
              name: action.payload.name,
              email:action.payload.email,
              tell: action.payload.tell
             
              };
            return { ...state, users: [...state.users, newUser] };
            case "DELETE_USER":
            const FilteredUsers = state.users.filter(user => user.id !== action.payload);
            return {...state, users: FilteredUsers}
           case "EDIT_USER":
             const editedUsers = state.users.map(user => {
               if (user.id === action.user_id){
                 return {...user, ...action.updated_info}
               } else {
                 return user;
               }
             });
              return {...state, users: editedUsers}
              default:
                return state;
            }
          };
export default UsersReducers;