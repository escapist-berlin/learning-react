import React from 'react';

function MyComponent(props) {

  const {title} = props;
  return <div>{title}</div>;
}

// Another short way to destructure the prop inside the parameter parentheses
// function MyComponent({ title }) {
//   return <div>{title}</div>;
// }

export default MyComponent;
