import react from "react";
import { Counter } from "./Counter";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <TextField
        text="hello"
        obj={{ firstName: "", lastName: "" }}
        handleChange={(e) => {
          e.timeStamp;
        }}
      />
    </div>
  );
};

export default App;
