import "react";
import * as React from "react";
const App = () => {
  return (
    <>
      <h1>Hello React</h1>
      <p>Hi there! This is my first webpack site I'm building.</p>
      <p>This will eventually be my portfolio site!</p>
      {/* this input should return an error because of the autoComplete attribute */}
      <input type="text" autoComplete="failure" />
    </>
  );
};

export default App;
