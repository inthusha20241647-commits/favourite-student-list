import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Navbar() {
  const { favourites } = useContext(StudentContext);

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-medium">Student Manager</h1>
      <div className="flex gap-4">
        <Link to="/" className="bg-[#8272DA] rounded-md px-3 py-1">
          Student List
        </Link>
        <Link to="/favourites" className="bg-[#FD6663] rounded-md px-3 py-1">
          Favourites ({favourites.length})
        </Link>
      </div>
    </div>
  );
}

export default Navbar;