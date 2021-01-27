import React from 'react';
import"./Home.css";

import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9Hf_O25Fi2bjmOh58bl-JkvasyJKUEsvIA&usqp=CAU'></img> 
             <div className="home__row">
              <Product id={0} title='T-shirt man black' price={29.99} image="https://www.carrefour.fr/media/1500x1500/Photosite/TEXTILE/HOMME/3609230283848_PHOTOSITE_20190620_104848_0.jpg?placeholder=1" rating={3}/>
              <Product id={0} title='B For Beast dad hat' price={25.99} image="https://cdn.shopify.com/s/files/1/0016/1975/5059/products/MRBEAST-B-FOR-BEAST-DAD-HAT6_2000x2000.jpg?v=1609984796" rating={4}/>
              <Product id={1} title='Nike Air Max97 for man ' price={70.00} image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a47b2ef9-8239-4e82-99fd-e6159c0df489/chaussure-air-max-97-pour-nsRddC.jpg" rating={5}/>
             </div>
             <div className="home__row">
                <Product />
                <Product />
                <Product />
             </div>
                <div className="home__row">
                <Product />
             </div>
            </div>
        </div>
    )
}

export default Home
