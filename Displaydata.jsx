import { useEffect, useState } from "react";
import getData, { delData } from "../api/Fooddata";
import "../styles/Displaydata.css";
import { InsertData } from "./Insertdata";

export const DisplayData = () => {
    const [Menu, setMenu] = useState([]);

    useEffect(() => {
        displayMenuData();
    }, [])

    const handleDelete = async (id) => {        
        try {
            const resdel = await delData(id);
            if(resdel.status === 200){
                const newdata = Menu.filter((curEl)=>{
                    return curEl.id !== id;
                })
                setMenu(newdata);
            }else{
                console.log("Failed to delete", resdel.status);
            }            
            //console.log(resdel);
        } catch (error) {
            console.log(error);
        }
    }

    const displayMenuData = async () => {
        const res = await getData();
        console.log(res.data);
        setMenu(res.data);
    }

    return (
        <>
        <section className="head-form">
            <div className="insertdiv">
            <InsertData curval={Menu} updatedata={setMenu} />
        </div>
        </section>
        
            <div className="container">
                <ul>
                    <li>
                        {
                            Menu.map((fd) => {
                                const { id, title, body } = fd;
                                return (
                                    <div className="list-card">
                                        <h1>{id}</h1>
                                        <h2>{title}</h2>
                                        <h3>{body}</h3>
                                        <button className="delbtn" onClick={() => handleDelete(id)}>Delete</button>
                                    </div>
                                );
                            })
                        }
                    </li>
                </ul>
            </div>

        </>
    )
}
