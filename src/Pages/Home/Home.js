import React from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

function Home(){
    const history = useHistory();
    return(
        <div>
            <h1>Home</h1>
            <button
                onClick={()=>{
                    history.push("login");
                }}>Login</button>
            <button
                onClick={()=>{
                    history.push("cadastro");
                }}>cadastro</button>
        </div>
    );
}

export default Home;