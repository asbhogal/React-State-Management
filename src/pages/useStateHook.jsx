import { useState } from "react";

export default function useStateHook() {
  const [count, setCount] = useState(10);

  function incrementValue() {}

  return (
    <div>
      <p>
        const [count, setCount] = useState(10);
        <br />
        <br />
        useState(10) creates an array with the value 10. Within this array, the
        first item is the current value of that piece of state, which is
        assigned to the variable &quot;count&quot; Here in this declaration, the
        second item in this array is the &quot;setter&quot; function, which is
        called at a later point in order to set the piece of state (e.g. to a
        different value)
        <br />
        <br />
        <button onClick={incrementValue}>{count}</button>
        <br />
        <br />
        The button is assigned the current value of count.
        <br />
      </p>
    </div>
  );
}
