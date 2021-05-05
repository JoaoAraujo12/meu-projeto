import React from "react";
import { Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./Login.css";
import { MdHome } from "react-icons/md";

function Login(){

    const history = useHistory();

    function login(){
    //    alert("Bem vindo\n");
        history.push("home");
    }

    return(
        
            <div className="baselogin">
                <img src="https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg" alt="Paleta"/>
                <div className="botaologin">
                    <Button variant="danger" onClick={login} className="botaohome">
                        <MdHome/> 
                    </Button>
                    <div className="conteinerlogin">
                        <div>
                            <Form className="inputslogin">
                                <Form.Group controlId="Email">
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group> 

                                <Form.Group controlId="Password">
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="dark" onClick={login}>Login</Button>{' '}   
                            </Form>
                        </div>
                    </div>
                </div>    
            </div>
        
            
    );
}

export default Login;