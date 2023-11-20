//Note: this project does not use event handlers as props.
//App.js is the top-level component.
//Its children components are Card, then Header and Body.
import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App() {
  return (
    <div>
    {
      comments.map(comment =>
      <Card commentObject = {comment} />
      )
    }
    </div>
  );
}

export default App;
//Explaining lines 9 - 15:
//.map() creates a Card instance for each of the 3 objects in the comments array.
//for each Card instance, a prop is passed with the name of "commentObject" and a value of one of the 3 objects.
//these three Card are what ultimately render.
