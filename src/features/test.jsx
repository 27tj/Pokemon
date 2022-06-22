import { useState } from "react";
import store from "../store";
import { setFavor, increment } from "../reduers/action";

export default function Test_Page() {
  const state = store.getState();
  const [target, setTarget] = useState(1);
  //    store.subscribe(render)
  //   // function render() {
  //   //     <div>

  //   //     </div>
  //   // }

  return (
    <div>
      <button
        onClick={() => {
          store.dispatch(increment(target));
          console.log("+1", store.getState().UserDataReducer);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          const newTarget = target + 1;
          setTarget(newTarget);
          console.log("target", newTarget);
        }}
      >
        target
      </button>
      <button
        onClick={() => {
          store.dispatch(setFavor(target));
          console.log("setFavor", store.getState().UserDataReducer);
        }}
      >
        setFavor
      </button>
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        check State
      </button>
    </div>
  );
}
