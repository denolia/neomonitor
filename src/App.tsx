import React from "react";
import ConfigProvider from "./Context/ConfigProvider";
import InputArea from "./InputArea";
import Result from "./ResultArea/Result";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <InputArea />
        <Result />
      </ConfigProvider>
    </div>
  );
}

export default App;
