import React from "react";
import "./style.css";

function Tile(props) {
  //console.log(props);
  return (
    <div className="card text-white bg-primary mb-3" onClick={(err) => props.handleClick(props.icons.id,err)}>
      <div className="card-body">
        <i className={props.icons.image} aria-hidden='true'></i>
      </div>
      <div className="card-title">{props.icons.name}</div>
    </div>

  );
}

export default Tile;
// class Tile extends React.Component {
  
//   constructor(icons) {
//     super()
//     this.state =  icons 
//   }
  
//   render() {
//     return (
//       <div className="card text-white bg-primary mb-3" onClick={(err) => handleClick(this.state.icons.icons.id, err)}>
//         <div className="card-header">{this.state.icons.icons.name}</div>
//         <div className="card-body">
//           <i className={this.state.icons.icons.image} aria-hidden='true'></i>
//         </div>
//       </div>
//     );
//   }
// }
//   function handleClick(err) { onClick={handleClick}
//     err.preventDefault();
//     console.log('The tile was clicked.');
//   }