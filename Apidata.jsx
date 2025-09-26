import React from 'react';
import axios from 'axios';
const API= axios.create
(
    {
        baseURL:"https://jsonplaceholder.typicode.com"
    }
)
export const getData=()=>
{
    return API.get("/posts");
}
export const delData=(id)=>
{
    return API.delete(`/posts/${id}`);
}
export const insertData=(data)=>
{
    return API.post("/posts",data);
}
