import React from "react";
import ConfigProvider from "./Context/ConfigProvider";
import Header from "./Header/Header";
import InputArea from "./InputArea";
import Result from "./ResultArea/Result";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <Header />
        <InputArea />
        <Result />
      </ConfigProvider>
    </div>
  );
}

export default App;
