import Card from "./components/Card";
import { useEffect, useState } from "react";

const prodUrl = "https://tiijwog187.execute-api.us-east-1.amazonaws.com/Prod/";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(prodUrl, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.updatedCount);
      });
  }, []);
  return (
    <>
      <Card count={count} />
    </>
  );
}

export default App;
