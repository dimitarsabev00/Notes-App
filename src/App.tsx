import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddNote, Home, Notes } from "./screens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/note/add" element={<AddNote />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
