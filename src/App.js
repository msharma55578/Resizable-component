import logo from './logo.svg';
import './App.css';
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 5px #ddd",
  background: "#eaa2d2"
};
function App() {
  return (
    <div>
    <div className="displayclass">
      <Resizable
        style={style}
        defaultSize={{
          width: 700,
          height: 400
        }}
      >
        Component 1
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{
          width: 700,
          height: 400,
        }}
      >
        Component 2
      </Resizable>
    </div>
    <Resizable
      style={style}
      defaultSize={{
        width: 1400,
        height: 250
      }}
    >
      Component 3
    </Resizable>
  </div>
  );
}

export default App;
