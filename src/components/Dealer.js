 import React from "react";

    function Dealer(values, index, arr) {
      return <Tile icons={values} key={index+values.name} handleClick = { (x,y) => this.state.handleClick(x,y) } />
    }
    
    export default Dealer;