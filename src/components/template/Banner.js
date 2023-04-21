import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import banner1 from'./../img/vietnamese-tet-foods-banner.jpg';
import banner2 from './../img/can-tho-purple-sticky-rice-cake.jpg';
import banner3 from'./../img/1-banh-beo-hue-food.jpg';


class Banner extends Component{
    render(){

        return(
            <div className="banner-blog">
                <Carousel>
                <Carousel.Item>
                <img
                    className="img-banner"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-carousel">Vietnamese New year food</h3>
                    <p className="text-carousel">A traditional Tet tray in Vietnam includes many dishes typical of each region..</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="img-banner"
                    src={banner2}
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3 className="text-carousel">Can Tho Purple Sticky Rice Cakel</h3>
                    <p className="text-carousel">Bánh Tét is a traditional sticky rice cake in Can Tho that many tourists know and love to enjoy as well as buy as gifts when visiting Can Tho..</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="img-banner"
                    src={banner3}
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3 className="text-carousel">Banh Beo – Bloating Duckweed -Shaped Cake</h3>
                    <p className="text-carousel">
                    Bloating fern-shaped cake is a simple, rustic Hue food that is very famous in all 3 regions in Vietnam. The tiny, limber cake with the attractive fragrant of rice flour, the sweetness of fried dried shrimp, and the spiciness of the dipping sauce, making people are really attracted when enjoying this dish.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            </div> 
        
            )

    }
    
}
export default Banner;