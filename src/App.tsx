import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddNote, Home } from "./screens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/note/add" element={<AddNote />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
