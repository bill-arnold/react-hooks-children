// import React from "react";
import Container from "./Container";

// function App() {
//   return (
//     <div className="App">
//       <Container header="Example header" direction="horizontal">
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//       </Container>
//       <Container header="Example header" textPosition="center">
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//       </Container>
//     </div>
//   );
// }

import React from 'react';

function Example(props) {
  return (
    <div>
      {/* Render a prop value */}
      {props.exampleProp}

      {/* Render children passed to the Example component */}
      {props.children}
    </div>
  );
}

// Using the Example component with both props and children
const App = () => {
  return (
    <div>
      {/* Example with only a prop */}
      <Example exampleProp="Example with prop only" />

      {/* Example with both a prop and children */}
      <Example exampleProp="Example with prop and children">
        <h1>Example header!</h1>
        <p>Some example text</p>
      </Example>
    </div>
  );
}

export default App;



