//children component.
import React from 'react';

//main component of file titled "Header":
function Header(props) { //recieves props from parents.
  return (
    <div> 
      <img src = {props.profileImg}></img>
      <h1> {props.username} </h1>
    </div>
  );
}

//export Header component.
export default Header;

//we get src as a url that trickled down all the way from the top App component via props object.
