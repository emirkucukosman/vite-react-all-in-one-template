import { useState } from "react";
import "~/App.css";

// Assets
import ReactIcon from "~/assets/react.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={ReactIcon} alt="react" />
      <button onClick={() => setCount((_count) => _count + 1)}>Click</button>
      {count > 0 ? <span>count is {count}</span> : null}
    </div>
  );
};
