import { useState } from "react";
import {insertData} from "../api/Fooddata";

export const InsertData = ({curval, updatedata}) => {
    const [curInsert, setInsertdata] = useState({
        title:"",
        body:"",
    });

    const handleInputdata = (obj) =>{
        const name = obj.target.name;
        const value = obj.target.value;
        setInsertdata((olddata)=>{
            return{
                //3 dots spread operater
                ...olddata,
                [name]:value,
            }
        })
    }

    const adddata = async() =>{
        const res= await insertData(curInsert);
        console.log(res);
        if ((res.status === 201)){
            updatedata([...curval, res.data]);
            setInsertdata({
                title:"",
                body:"",
            })
        }

    }

    const handleFormsubmit =(e)=>{
        e.preventDefault();
        adddata();
    }
    return(
        <>
        <div className="form-container">
            <form onSubmit={handleFormsubmit}>
            <label htmlFor="title">Title</label> &nbsp;
            <input name="title"  placeholder="add title"  value={curInsert.title}  onChange={handleInputdata}></input><br/><br/>
            <label htmlFor="body">Body</label> &nbsp;
            <input name="body" placeholder="add body"  value={curInsert.body} onChange={handleInputdata}></input><br/><br/>
            <button type="submit" className="addbtn">Submit</button>
            </form>
        </div>
        </>
    )
}
