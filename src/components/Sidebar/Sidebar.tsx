import notesIcon from "../../assets/icons/notes_icon.png";
import { AiFillHome } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
import { useEffect } from "react";

const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "");
  const navigate = useNavigate();
  useEffect(() => {
    let pathnameInUseEff = location.pathname;
    if (pathnameInUseEff === "/") {
      navigate("/notes");
    }
  }, []);
  return (
    <div className="app-sidebar">
      <div className="sidebar-content py-3 flex flex-column">
        <Link
          to="/notes"
          className="app-brand flex align-center justify-center"
        >
          <img src={notesIcon} alt="" />
        </Link>

        <ul className="links my-4">
          <Link
            to="/notes"
            className={`text-white flex justify-center align-center link-item ${
              pathname === "/notes" ? "active-link" : ""
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
