import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(10);

  function incrementValue() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>
        const [count, setCount] = useState(10);
        <br />
        <br />
        The output of useState() is an array. The first item is the current
        value of the piece of state (here, &quot;count&quot;) and the second
        item is the setter function:<br></br>
        <br></br>const [count, setCount] = useState(); <br></br>
        <br></br>useState(10) creates an array with the value 10. Within this
        array, the first item is the current value of that piece of state, which
        is assigned to the variable &quot;count&quot; Here in this declaration,
        the second item in this array is the &quot;setter&quot; function called
        &quot;setCount&quot; which is called at a later point in order to set
        the piece of state (e.g. to a different value)
        <br />
        <br />
        <button onClick={incrementValue}>Count = {count}</button>
        <br />
        <br />
        The button is assigned the current value of count.
        <br />
        <br />
        To increment this when the button is clicked, append the onClick event
        attribute and pass it a function, for e.g.:
        <br />
        <br />
        {`onClick={incrementValue}`}
        <br />
        <br />
        Then before the return():
        <br />
        <br />
        {`function incrementValue() {
          setCount(count + 1);
        }`}
      </p>
    </div>
  );
}

export default UseStateHook;
