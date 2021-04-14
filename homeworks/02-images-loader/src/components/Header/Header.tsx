import React from 'react';
import "./Header.css"
import bubleImg from "../Header/buble.png";


class Header extends React.Component {

    render() {

     return (

            <div className="headerWrapper">
                <h1> Bubble sort </h1>
                <img src={bubleImg} className={"imgBubble"} />
            </div>

      );
    }
  }


  export default Header;


