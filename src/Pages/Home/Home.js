import React from "react";
import {useHistory} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import "./Home.css";


function Home(){
    const history = useHistory();
    
    return(
        <div className="paihome">
            <img className="fundotelaHome" src="https://cdn.pixabay.com/photo/2017/08/27/23/11/background-2687925_960_720.jpg" alt="fundotelahome" />
            <div className="carrosselhome">
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Primeira Imagem</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/6620183/pexels-photo-6620183.jpeg?cs=srgb&dl=pexels-polina-kovaleva-6620183.jpg&fm=jpg"
                        alt="Fourth slide"
                        />

                        <Carousel.Caption>
                        <h3><font color="red"><b>Fourth slide label</b></font></h3>
                        <p><font color="red"><b>O que veio primeiro? O ovo ou a galinha?</b></font></p>
                        </Carousel.Caption>
                    </Carousel.Item>

            </Carousel>
                
            </div>
        </div>

    );
}

export default Home;