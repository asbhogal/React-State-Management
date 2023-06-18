import { useState } from "react";
import Header from "../components/Header";

export default function UseStateHook() {
  const [count, setCount] = useState(10);

  function incrementValue() {
    setCount(count + 1);
  }

  return (
    <>
      <Header />
      <h2 className="content-title">useState()</h2>
      <main>
        <p>
          For this, we will use a simple button with an initial value that
          increases by one every time it is clicked.
          <br />
          <br />
          <span className="code-text">
            const [count, setCount] = useState();
          </span>
          <br />
          The output of useState() is an array. The first item is the current
          value of the piece of state (here, &quot;count&quot;) and the second
          item is the setter function:<br></br>
          <br></br>const [count, setCount] = useState(10); <br></br>
          <br></br>useState(10) creates an array with the value 10. Within this
          array, the first item is the current value of that piece of state,
          which is assigned to the variable &quot;count&quot; Here in this
          declaration, the second item in this array is the &quot;setter&quot;
          function called &quot;setCount&quot; which is called at a later point
          in order to set the piece of state (e.g. to a different value)
          <br />
          <br />
          <button onClick={incrementValue}>Count = {count}</button>
          <br />
          <br />
          The button is assigned the current value of count.
          <br />
          <br />
          To increment this when the button is clicked, we append the onClick
          event attribute and pass it a function, for e.g.:
          <br />
          <br />
          <span className="code-text">{`onClick={incrementValue}`}</span>
          <br />
          Then before the return():
          <br />
          <br />
          <span className="code-text">{`function incrementValue() {
          setCount(count + 1);
        }`}</span>
          <br />
          At this point, we have the following code:
          <br />
          <br />
          <span className="code-text">
            {`const [count, setCount] = useState(10);`}
            <br />
            {`function incrementValue() {
              setCount(count + 1);
            }`}
            <br />
            {`return(<button onClick={incrementValue}>Count = {count}</button>)`}
          </span>
          <br />
          What we&apos;ve done here is create a simple React component that
          manages a count value and provide it a button to increment it.
          <br />
          <br />
          1. The line const [count, setCount] = useState(10); declares a state
          variable named count and a corresponding function setCount using the
          useState hook. The initial value of the count state is set to 10.
          <br />
          &sdot; useState is a built-in hook in React that allows functional
          components to manage state. It returns an array with two elements: the
          current state value (count in this case) and a function (setCount) to
          update the state. <br />
          &sdot; In this code, the count state is initialized to 10 by passing
          it as an argument to the useState hook. The setCount function is used
          to modify the value of count later.
          <br />
          <br />
          2. The incrementValue function is declared - this simple function
          increments (ie. adds 1) to the count value when called. This function
          is responsible for updating the state.
          <br />
          &sdot; Inside the incrementValue function, setCount(count + 1); is
          called to update the count state. It takes the current value of count,
          adds 1 to it and sets the new value as the updated state value. This
          then triggers a re-render of the component, which then reflects the
          updated value in the UI/button
          <br />
          <br />
          3. The button has an onClick attribute that specifies the
          incrementValue function as the event handler when the button is
          clicked.
          <br />
          &sdot; When the button is clicked, the onClick event triggers the
          incrementValue function, which in turn updates the state by invoking
          the setCount function. <br />
          &sdot; The text displayed on the button is {`Count={count}`} which
          shows the current value of count in the UI at that point in time.
          <br />
          <br />
          NB. Using <span className="code-text">count++ </span>to increment the
          value won&apos;t work. To understand why, see the case below:
          <br />
          <br />
          &sdot;{" "}
          {`function getState() {
            let value = 42;
            return value;
          }`}
          <br />
          <br />
          Here, we have a function called getState() which assigns the value 42
          to the variable &apos;value&apos;. This is then returned.
        </p>
      </main>
    </>
  );
}
