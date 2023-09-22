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
      <main>
        <h2 className="content-title">useState()</h2>
        <p>
          For this, we will use a simple button with an initial value that
          increases by one every time it is clicked.
        </p>
        <img src="/screenshots/useState/1.jpeg" alt="code screenshot" />
        <p>
          The output of useState() is an array. The first item is the current
          value of the piece of state (here, &quot;count&quot;) and the second
          item is the setter function:
        </p>
        <img src="/screenshots/useState/2.jpeg" alt="code screenshot" />
        <p>
          useState(10) creates an array with the value 10. Within this array,
          the first item is the current value of that piece of state, which is
          assigned to the variable &quot;count&quot; Here in this declaration,
          the second item in this array is the &quot;setter&quot; function
          called &quot;setCount&quot; which is called at a later point in order
          to set the piece of state (e.g. to a different value)
        </p>
        <button onClick={incrementValue}>Count = {count}</button>
        <p>The button is assigned the current value of count.</p>
        <p>
          To increment this when the button is clicked, we append the onClick
          event attribute and pass it a function, for e.g.:
        </p>
        <img src="/screenshots/useState/3.jpeg" alt="code screenshot" />
        <p>Then before the return:</p>
        <img src="/screenshots/useState/4.jpeg" alt="code screenshot" />
        <p>At this point, we have the following code:</p>
        <img src="/screenshots/useState/5.jpeg" alt="code screenshot" />
        <p>
          What we&apos;ve done here is create a simple React component that
          manages a count value and provide it a button to increment it.
        </p>
        <ol>
          <li>
            The line const [count, setCount] = useState(10); declares a state
            variable named count and a corresponding function setCount using the
            useState hook. The initial value of the count state is set to 10.
            useState is a built-in hook in React that allows functional
            components to manage state. It returns an array with two elements:
            the current state value (count in this case) and a function
            (setCount) to update the state. In this code, the count state is
            initialized to 10 by passing it as an argument to the useState hook.
            The setCount function is used to modify the value of count later.
          </li>
          <li>
            The incrementValue function is declared - this simple function
            increments (ie. adds 1) to the count value when called. This
            function is responsible for updating the state. Inside the
            incrementValue function, setCount(count + 1); is called to update
            the count state. It takes the current value of count, adds 1 to it
            and sets the new value as the updated state value. This then
            triggers a re-render of the component, which then reflects the
            updated value in the UI/button
          </li>
          <li>
            The button has an onClick attribute that specifies the
            incrementValue function as the event handler when the button is
            clicked. When the button is clicked, the onClick event triggers the
            incrementValue function, which in turn updates the state by invoking
            the setCount function.
            <br />
            The text displayed on the button is {`Count={count}`} which shows
            the current value of count in the UI at that point in time.
          </li>
        </ol>
        <p>NB. Using:</p>
        <img src="/screenshots/useState/6.jpeg" alt="code screenshot" />
        <p>
          to increment the value won&apos;t work. Doing so will throw the error
          &quot;Assignment to constant variable&quot; when the state variable is
          declared with a const. When this is changed to let, the error
          disappears, but the increment function still doesn&quot;t work. To
          understand why, see the case below:
        </p>
        <img src="/screenshots/useState/7.jpeg" alt="code screenshot" />
        <p>
          Here, we have a function called getState() which assigns the value 42
          to the variable &apos;value&apos; which is then returned. When we call
          this function:
        </p>
        <img src="/screenshots/useState/8.jpeg" alt="code screenshot" />
        <p>
          As expected, it returns 42. We can now assign this function to a new
          variable:
        </p>
        <img src="/screenshots/useState/9.jpeg" alt="code screenshot" />
        <p>And then output the result:</p>
        <img src="/screenshots/useState/10.jpeg" alt="code screenshot" />
        <p>
          As expected, the value of the myValue variable is still 42. However,
          if we now set this variable to a different value:
        </p>
        <img src="/screenshots/useState/11.jpeg" alt="code screenshot" />
        <img src="/screenshots/useState/12.jpeg" alt="code screenshot" />
        <p>
          This is expected because myValue is assigned as a let, so values can
          be reassigned. The problem however comes when we call the state
          function again. Currently this is the code:
        </p>
        <img src="/screenshots/useState/13.jpeg" alt="code screenshot" />
        <p>
          So far, the behaviour is as expected, however if we now assign the{" "}
          <strong>same</strong> function to a <strong>different</strong>{" "}
          variable this time:
        </p>
        <img src="/screenshots/useState/14.jpeg" alt="code screenshot" />
        <p>
          We can see that the original value assigned within the function at the
          beginning is returned. This is a crucial thing to note - setting the
          value of a return only sets the local copy of it. This is because
          scalars (e.g. strings, numbers and booleans) are returned and passed
          by <strong>value</strong> whereas arrays and objects are returned and
          passed by <strong>reference</strong>. This means when you return
          something by value, you don&quot;t get the value itself, but a copy of
          it, which, as demonstrated in this case above, is <strong>not</strong>{" "}
          the same thing. When myValue was reassigned the value 22, it was the
          local copy which was set, not the value itself. This is a big
          difference.
        </p>
        <p className="accent-text">
          &ldquo;Scalars (e.g. strings, numbers and booleans) are returned and
          passed by value, whereas arrays and objects are returned and passed by
          reference.&ldquo;
        </p>
      </main>
    </>
  );
}
