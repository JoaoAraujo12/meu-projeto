import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login(){

    return(
        <div className="base">
            <div className="conteiner">
            <img src="https://lh3.googleusercontent.com/pw/ACtC-3epJ9N8AzB7VhAN90vof4C25dN8kugvl5N7UM5aI904GM162xyUBrtcC3qD9mW56rHBmu3Qg0-DYhD0nqy7ljiLixlHwMuGDPnM6sIqhvh8h6mgQB5KGBhFGkL0Lg2PavZu_70J9DfQsG4XLEWF95JA8w=w562-h267-no?authuser=2" alt="Digital Art"/>
                <div>
                    <Form className="inputs">
                        <Form.Group controlId="Email">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group> 

                        <Form.Group controlId="Password">
                           <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="dark">Login</Button>{' '}   
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;