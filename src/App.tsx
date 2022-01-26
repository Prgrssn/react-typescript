import react from "react";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" obj={{ firstName: "", lastName: "" }} />
    </div>
  );
};

export default App;
