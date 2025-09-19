import axios from "axios";

const api= axios.create({
    //baseURL:"https://api.openbrewerydb.org/v1/breweries"
    baseURL:"https://jsonplaceholder.typicode.com"
});

const getData = () =>{
    return api.get("/posts");
}

export const delData = (id) =>{
    return api.delete(`/posts/${id}`);
}

export const insertData = (data) =>{
    return api.post("/posts",data);
}

export default getData;
