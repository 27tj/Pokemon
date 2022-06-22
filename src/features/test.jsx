import { useState } from "react";
import store from "../store";
import { setFavor, increment } from "../reduers/action";
import stateSelector from "../reduers/selector";
export default function Test_Page() {
  const state = store.getState();
  const [target, setTarget] = useState(1);
  //    store.subscribe(render)
  //   // function render() {
  //   //     <div>

  //   //     </div>

  return (
    <div>
      <button
        onClick={() => {
          store.dispatch(increment(target));
          console.log("+1", stateSelector(store.getState()));
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
          console.log("setFavor", stateSelector(store.getState()));
        }}
      >
        setFavor
      </button>
      <button
        onClick={() => {
          console.log(stateSelector(store.getState()));
        }}
      >
        check State
      </button>
    </div>
  );
}
