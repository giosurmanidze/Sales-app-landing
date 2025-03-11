import React from "react";
import Header from "./components/Header";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

function App() {
  return (
    <div className="grid grid-cols-1 min-h-screen md:h-screen w-full grid-rows-[auto_1fr]">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full overflow-hidden h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full">
          <div className="md:col-span-7 w-full h-full">
            <LeftBox />
          </div>
          <div className="md:col-span-5 w-full h-full">
            <RightBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
