import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Donate from "./Donate";


function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Donate />} />
     
      </Routes>
    </Router>
  );
}

export default App;
