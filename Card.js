//Card.js is the child of the App component.
//Card.js has Header and Body as its children components.
import React from 'react';
import Header from './Header';
import Body from './Body';

function Card(props) {
  return (
    <div>
      <Header profileImg = {props.commentObject.profileImg} username = {props.commentObject.username} />
      <Body comment = props.commentObject.comment} />
    </div>
  );
}

export default Card;
//Explaining lines 7 - 14:
//card component takes in the prop "commentObject", which is 1 of the 3 objects,coming from App component.
//the Header instance gets passed 2 props 1) profileImg and 2) username. the value of these are the the profileImg and username value from the commentObject prop.
//the Body instance gets 1 prop titles comment and its value is the actual comment.
//props.commentObject.comment === we are accessing an object with 3 key-value pairs from the props object (object from another object -- can get confusing).
