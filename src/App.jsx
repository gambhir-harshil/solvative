import { useState } from "react";
import Input from "./components/Input";
import useFetchCities from "./hooks/useFetchCities";
import Table from "./components/Table";

const App = () => {
  const [input, setInput] = useState("");
  const { data, loading, error } = useFetchCities(input);
  return (
    <div className="main">
      <Input input={input} setInput={setInput} />
      <Table data={data} loading={loading} error={error} />
    </div>
  );
};

export default App;
