import { useState } from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

function Counter() {
  const [count, setCount] = useState(10);

  function incrementValue() {
    setCount(count + 1);
  }

  return <button onClick={incrementValue}>Count = {count}</button>;
}

function NameList() {
  const [list, setList] = useState(["Frodo", "Samwise", "Gandalf", "Gollum"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default function UseStateHook() {
  return (
    <>
      <Header />
      <main>
        <BackButton />
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
        <Counter />
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
          As expected, the value of the myValue variable is still 42. If we now
          set this variable to a different value:
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
          So far, the behaviour is as expected, but if we now assign the{" "}
          <strong>same</strong> function to a <strong>different</strong>{" "}
          variable this time:
        </p>
        <img src="/screenshots/useState/14.jpeg" alt="code screenshot" />
        <p>
          We can see that the original value assigned within the function at the
          beginning (ie. captured variable) is returned. This is a crucial thing
          to note - setting the value of a return <strong>only</strong> sets the
          local copy of it. This is because scalars (e.g. strings, numbers and
          booleans) are returned and passed by <strong>value</strong> whereas
          arrays and objects are returned and passed by{" "}
          <strong>reference</strong>. This means when you return something by
          value, you don&apos;t get the value itself, but a copy of it, which,
          as demonstrated in this case above, is <strong>not</strong> the same
          thing. When myValue was reassigned the value 22, it was the local copy
          which was set, not the value itself. This is a big difference.
        </p>
        <p>
          A case also cannot be argued for destructuring the array (which is
          initially returned with a useState hook - see earlier), as the same
          result occurs:
        </p>
        <img src="/screenshots/useState/15.jpeg" alt="code screenshot" />
        <p>
          While there is a way to make the getState() function achieve this
          using enclosures, the approach is &quot;hacky&quot; and doesn&quot;t
          leverage the capabilities and purpose of state management within
          React.
        </p>
        <p className="accent-text">
          &ldquo;Scalars (e.g. strings, numbers and booleans) are returned and
          passed by value, whereas arrays and objects are returned and passed by
          reference.&ldquo;
        </p>
        <p>
          Another thing worth noting is each component that has the useState
          hook within them is coupled with that particular instance, ie. their
          state is updated independent of one another. If we consider the code
          above, this time encapsulated within a separate Counter component, and
          render this four times within another functional component, we can see
          that they increment and hold their values independent of one another:
        </p>
        <img src="/screenshots/useState/16.jpeg" alt="code screenshot" />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <p>
          The Counter components maintain their own count, and by clicking on
          the buttons, these can be independently mutated and therefore maintain
          their individual states.
        </p>
        <p>
          (NB. in this article, the Counter component has been rendered directly
          into this JSX)
        </p>
        <h3>Using Arrays</h3>
        <p>
          To use arrays instead of scalars (e.g. to demonstrate an array of
          names, with the ability to add names to it), we can create a function
          with some state to hold an initial list of names:
        </p>
        <img src="/screenshots/useState/17.jpeg" alt="code screenshot" />
        <p>
          We can now render this state to the virtual DOM by calling the map()
          function on the array. We&apos;ll use this to display an unordered
          list of the array elements, using the name values themselves as keys
          (these are required in React to uniquely identify elements, help it
          identify and track changes, additions or omissions and prevents
          unnecessary re-rendering of the entire list by only dynamically
          updating those which have changed)
        </p>
        <img src="/screenshots/useState/18.jpeg" alt="code screenshot" />
        <NameList />
        <p>
          To add an item to the array, we&apos;ll need an input field. This is
          where multiple pieces of state can be associated with the same
          component. Here we&apos;ll also have another piece of state which is
          initiated as an empty scalar string.
        </p>
        <img src="/screenshots/useState/19.jpeg" alt="code screenshot" />
        <p>
          An event now occurs when the text changes. The event has a value for
          the current target (the target of that event being the input itself).
          Within this target, there is the current value (ie. the last text
          entered by the user or the last state of the text field.) We use the
          setName setter function here, as assigning the value to the name
          &apos;name&apos; itself will just return copies (as seen earlier.)
        </p>
        <p>
          A button is now needed in order to append the input field data to the
          list. A click handler will ensure the button will respond to being
          interacted with, which will call a function to perform this.
        </p>
        <img src="/screenshots/useState/20.jpeg" alt="code screenshot" />
        <p>
          At this point, we&apos;ll create the onAddName function and assess
          three different approaches to the logic.
        </p>
        <p>Approach 1 - Pushing the name to the list array</p>
        <img src="/screenshots/useState/21.jpeg" alt="code screenshot" />
        <p>
          When we do this, add a name and press the button, nothing happens.
          However, when we change the state of the component (ie. press
          backspace), a re-render occurs and the entered value is appended to
          the end of the list of names (the full text entered is shown in the
          list). Pressing backspace changes the state of the name field (which
          calls setName()).
        </p>
        <p>setName() then does two things:</p>
        <ol>
          <li>Sets the name</li>
          <li>Enqueues a re-render request for the component</li>
        </ol>
        <p>
          When the re-render happens, the same list is returned here. This shows
          the difference between scalars and references. When React is provided
          a reference to a particular array, it holds a reference to that array
          (not the data itself) which it then returns. The push() function is an
          in-place command to mutate that data of that array in place. This is
          why when we manually refresh the page, the updated data is shown.
        </p>
        <p>
          The problem however is React doesn&apos;t know this has been done.
          This is why the second purpose of a setter function doesn&apos;t
          occur.
        </p>
        <p>Approach 2 - Explicitely calling the setter function after</p>
        <img src="/screenshots/useState/22.jpeg" alt="code screenshot" />
        <p>
          However, when we do this and then try and add a name this time,
          nothing happens. This is because when it comes to useState and calling
          the setter function, it looks at the old value and the new value. If
          these two are the same, nothing happens. The problem here is we&apos;e
          giving it back the same reference we had before - ie. the setter
          function is looking at the two <strong>references</strong> and
          realising it&apos; the same array. Because of this, it doesn&apos;t
          enqueue a re-render request.
        </p>
        <p>
          Therefore in order to make this work (ie. dynamically re-render and
          update the list each time new data is added and the button is
          pressed), instead of in-place mutating the array, a{" "}
          <strong>new</strong> array with a different <strong>reference</strong>{" "}
          is created with the contents of the <strong>old</strong> array plus
          the <strong>new</strong> one
        </p>
        <p>Approach 3 - Giving the setter function a new array</p>
        <img src="/screenshots/useState/23.jpeg" alt="code screenshot" />
        <p>
          This now spreads the contents of the existing &apos;list&apos; array
          and adds the contents of the new &apos;name&apos; array to the end of
          it. This also preserves the immutability of the original array,
          therefore push() function is no longer required (mutating the existing
          array, as seen above, can result in React not being able to track the
          changes correctly.)
        </p>
        <p>
          React encourages immutability when updating state (recommended way).
          This way shown above ensures a new state is created based on the
          current state, which in turn allows React to track changes and trigger
          re-renders when necessary.
        </p>
        <p>
          After each state update (from the function call), we can also clear
          the input box for the next data:
        </p>
        <img src="/screenshots/useState/24.jpeg" alt="code screenshot" />
        <p>
          This resets the name state variable to an empty string after it has
          been added to the new array and rendered in the list
        </p>
        <p>This is the final code:</p>
        <img src="/screenshots/useState/25.jpeg" alt="code screenshot" />
        <p>And here is the UI to test out:</p>
        <NameList />
      </main>
    </>
  );
}
