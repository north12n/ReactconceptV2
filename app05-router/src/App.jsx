import React from "react";
import  Header from "./components/Header"
import MuiHeader from "./components/MuiHeader"
import MianRouter from "./components/MianRout"

function App() {
  return (

      <div>
        <Header/>
        {/* <MuiHeader/> */}

        <MianRouter />

        {/* <Router>
          <MianRouter />
        </Router> */}

      </div>
    
  );
}
export default App;