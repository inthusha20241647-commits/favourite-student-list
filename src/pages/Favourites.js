import { useContext } from "react";
import Navbar from "../components/Navbar";
import { StudentContext } from "../context/StudentContext";

function Favourites() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 rounded-md">
        <Navbar />
        <p className="mb-3">Favourite students</p>

        {favourites.length === 0 ? (
          <p className="bg-red-500 p-2 rounded-md w-fit">
            No favourite students added yet
          </p>
        ) : (
          <div className="flex gap-5 flex-wrap">
            {favourites.map((student) => (
              <div
                key={student.id}
                className="border border-black rounded-md p-4 w-56"
              >
                <h2 className="text-xl font-medium">{student.name}</h2>
                <p>Roll No: {student.roll}</p>
                <p className="mb-3">ID: {student.id}</p>
                <button
                  onClick={() => removeFavourite(student.id)}
                  className="bg-[#FD6663] rounded-md px-3 py-1"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;