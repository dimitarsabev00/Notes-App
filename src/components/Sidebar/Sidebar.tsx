import notesIcon from "../../assets/icons/notes_icon.png";
import { AiFillHome } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "");

  return (
    <div className="app-sidebar">
      <div className="sidebar-content py-3 flex flex-column">
        <Link to="/" className="app-brand flex align-center justify-center">
          <img src={notesIcon} alt="" />
        </Link>

        <ul className="links my-4">
          <Link
            to="/"
            className={`text-white flex justify-center align-center link-item ${
              pathname === "" ? "active-link" : ""
            }`}
          >
            <span className="flex align-center justify-center">
              <AiFillHome size={17} />
            </span>
            <span className="icon-text">Home</span>
          </Link>
          <Link
            to="/note/add"
            className={`text-white flex justify-center align-center link-item ${
              pathname === "add" ? "active-link" : ""
            }`}
          >
            <span className="flex align-center justify-center">
              <BsPlusLg size={17} />
            </span>
            <span className="icon-text">Add</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
