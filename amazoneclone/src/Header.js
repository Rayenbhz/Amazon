import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ImgHeader from './img/shopping.png'
function Header() {
    return (
        <div className='header'>
            <img className="header_logo" src={ImgHeader} alt="playS"></img>
            <div className="header__search">
               <input className="header_searchInput" type="text"></input>
               <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__potion">
                   <span className="header_ptionLineOne">Hello Guest</span> 
                   <span className="header_ptionLineTwo">Sign In</span> 
                </div> 
                <div className="header__potion">
                  <span className="header_ptionLineOne">Returns</span>
                  <span className="header_ptionLineTwo">Orders</span>    
                </div>
                <div className="header__potion">
                   <span className="header_ptionLineOne">Your</span>
                   <span className="header_ptionLineTwo">Prime</span>     
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                <span className="header_ptionLineTwo header__basdketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
