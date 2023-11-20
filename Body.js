//children component.
import React from 'react';

//main component of file titled "Body":
function Body(props) { //recieves props from parents.
  return (
    <div>
      <p> {props.comment} </p>
    </div>
  );
}

//export Body component.
export default Body;
//we get a string which trickled down via props objects.
