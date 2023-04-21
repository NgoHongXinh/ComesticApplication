import React, { Component } from 'react';
import './css/App.css';
import dl from './../food.json';
import ImageList from './ImageList';

class Gallery extends Component {
    render() {
        return (
            <div className='container'>
                <ul className='image-gallery'>
                {
                           dl.map((x, key)=>{
                             return(
                                
                                     <ImageList key={key}
                                        tinId={x.id}
                                        anh={x.anh} 
                                        tieude={x.tieude}
                                        >

                                        </ImageList>
                             
                             )
                             
                        
                           })
                           
                          
                        }                   
 
                </ul>
            </div>
        );
    }
}

export default Gallery;