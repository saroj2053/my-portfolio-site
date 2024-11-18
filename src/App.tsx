import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <div className="loader__screen">
          <Loader onCompletion={() => setLoading(false)} />
        </div>
      ) : (
        <div className="app">
          <HomeLayout />
        </div>
      )}
    </>
  );
}

export default App;
