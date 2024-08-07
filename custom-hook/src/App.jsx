import "./App.css";
import OnclickOutSide from "./components/OnclickOutSide";
import Hover from "./components/Hover";
import FetchedData from "./components/FetchedData";
import LocalStorageHook from "./components/LocalStorageHook";
import WindowResize from "./components/WindowResize";
import Timeout from "./components/Timeout";

function App() {
  return (
    <>
      <FetchedData />
      <LocalStorageHook />
      <WindowResize />
      <Hover />

      <OnclickOutSide />
      <Timeout/>
    </>
  );
}

export default App;
