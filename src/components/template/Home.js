import React, { Component } from 'react';
import Vnflag from'./../img/vietnam flag.jpg';
import Vnmap from'./../img/vietnamese map.jpg';
import aodai from'./../img/aodai.jpg';
import Foods from './Foods';
import dl from '../food.json';
import avatar from './../img/avatar.jpg';




class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-3 col-lg-3'>
                    <div className='info-container'>
                      <div className='img-info'>
                          <img className='avatar' src={avatar}></img>
                      </div>
                      <div className='text-info'>
                        <b>Hi! I'm Xinh, I will help you learn about the rich cuisine in Vietnam.</b>
                      </div> 
                    </div>
                  </div>
                  <div className='col-md-9 col-lg-9'>
                  <section className="section section_discover section_no-padding_bottom">
                    <div className="container">
                      <h2 className="section_heading text-center p-3" style={{backgroundColor: 'lightblue'}}>
                        AROUND VIETNAM
                      </h2>
                      <div className="row">
                        
                        <div className="col-md-4 align-self-start">
                          {/* Image */}
                          <div className="section_discover__img">
                            <img src={Vnflag} className="img-fluid" alt="vietnam flag" />
                          </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                          {/* Content */}
                          <h2>Meaning of symbols</h2>
                          <p>
                            The red background symbolizes the revolution, yellow is the traditional color representing the Vietnamese nation, and 5 stars represent the 5 classes of scholars, farmers, workers, merchants, soldiers and solidarity.
                          </p>
                        </div>
                      </div> {/* / .row */}
                    </div> {/* / .container */}
                  </section>
                  <section className="section section_discover">
                    <div className="container">
                      <div className="row">
                        
                        <div className="col-md-4 order-md-3 align-self-start">
                          {/* Image */}
                          <div className="section_discover__img " alt="reactjs" >
                            <img src={Vnmap} className="img-fluid" alt="vietnamesemap" />
                          </div>
                        </div>
                        <div className="col-md-6 order-md-1 align-self-center">
                          {/* Content */}
                          <h2>Three domain cuisine</h2>
                          <p>
                            The country of Vietnam is divided into 3 distinct sections: Northern, Central and the Southern. The cooking style in each region differs in main ingredients, tastes and flavors. However, there are still quite lots of things in common. It is the use of some traditional spices like fish sauce, shrimp paste, soy sauce and the importance of rice and by-products of rice.
                            <br />Vietnam is divided into three main regions: north, south and central. Although there are common threads between the cuisines of these areas, each boasts its own individual characteristics. In northern Vietnam, food tends to be less spicy and black pepper is strongly favoured over chilli. It’s also home to the legendary bún chả, which Barack Obama and Anthony Bourdain famously enjoyed together in 2016. Central Vietnam, however, boasts complex mixtures of spicy flavours. The cuisine of Hue, the ancient capital of Vietnam, is particularly revered for its variety of distinctive and delicious dishes. Southern Vietnamese cuisine tends to be sweeter and the region’s fertile soil means that herbs are used more liberally in cooking. The southern version of phở tends to be more popular than its northern counterpart, although it’s best to try both to be sure.                          </p>
                        </div>
                      </div> {/* / .row */}
                    </div> {/* / .container */}
                  </section>
                  <section className="section section_discover section_no-padding_bottom">
                    <div className="container">
                      <div className="row">
                       
                        <div className="col-md-4 align-self-start">
                          {/* Image */}
                          <div className="section_discover__img">
                            <img src={aodai} className="img-fluid" alt="aodai" />
                          </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                          {/* Content */}
                          <h2> About Ao Dai</h2>
                          <p>
                            A Vietnamese national garment, worn by both sexes but now most commonly worn by women. In its current form, it is a long, split tunic dress worn over trousers. Áo translates as shirt, Dài means "long".
                            The word "ao dai" was originally applied to the outfit worn at the court of the Nguyễn Lords at Huế in the 18th century. This outfit evolved into the áo ngũ thân, a five-paneled aristocratic gown worn in the 19th and early 20th centuries. Inspired by Paris fashions, Nguyễn Cát Tường and other Hanoi artists redesigned the ngũ thân as a modern dress in the 1920s and 1930s.                          </p>
                        </div>
                      </div> {/* / .row */}
                    </div> {/* / .container */}
                  </section>                 
                  <section className="section section_discover">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          {/* Heading */}
                          <h2 className="section_heading text-center m-3" style={{backgroundColor: 'lightblue'}}>
                            VIETNAMESE TRADITIONAL DISHED
                          </h2>
                          <p className="menu_item text-center">
                            These six Vietnamese traditional dished not only honor the beauty and taste of Vietnamese cuisine, but also spread its good reputation throughout the world. Let’s try out these if you have a chance.
                          </p>
                        </div>
                      </div> {/* / .row */}
                      <div className="row"  >
                        
                        {
                           dl.map((food, key)=>{
                             return(
                              
                              <Foods key={key}
                              tinId={food.id}
                              anh={food.anh} 
                              tieude={food.tieude}
                              trichdan={food.trichdan}
                              price={food.price}
                              noidung = {food.noidung}
                              >

                              </Foods>
                              
                             )
                                                    
                           })
                                                    
                        }                        
                        
                      </div> {/* / .row */}
                    </div> {/* / .container */}
                  </section>
                
                  </div>
                </div>
                
            </div>
        );
    }
}

export default Home;