import axios from "axios";


const url = "http://127.0.0.1:8000/adminLogin";

export const createUser = (newUser)=> axios.post(url,newUser);