import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddNote, EditNote, Home, Notes } from "./screens";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/note/add" element={<AddNote />} />
          <Route path="/note/edit/:id" element={<EditNote />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
      <ToastContainer />

    </Router>
  );
};

export default App;
