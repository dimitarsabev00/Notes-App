import { Routes, Route } from "react-router-dom";
import { AddNote, EditNote, Home, Notes, SingleNote } from "../../screens";
import { ToastContainer } from "react-toastify";
const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/note/add" element={<AddNote />} />
          <Route path="/note/edit/:id" element={<EditNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default RoutesComp;
