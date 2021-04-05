import * as Api from "../Api";


// creating action


export const createUser = (user) => async (dispatch)=>{
    try {
        const {data} = await Api.createUser(user);
        dispatch({type:"CREATE",payload:data})
    } catch (error) {
        console.log(error);
    }
}