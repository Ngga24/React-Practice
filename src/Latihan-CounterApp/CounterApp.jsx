import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  function tambah() {
    setCount(count + 1);
  }

  function kurang() {
    if(count > 0) {
        setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{fontFamily: "sans-serif", background: "#fff", color: "black", border: "1px solid black", borderRadius: "8px", textAlign: "center", padding: "20px"}}>
      <h1 style={{color: "gray"}}>Counter App</h1>
      <p style={{fontSize: "20px"}}>Jumlah klik: {count}</p>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang} style={{ margin: "0 10px" }}>Kurang</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
