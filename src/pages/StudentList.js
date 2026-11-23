import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { StudentContext } from "../context/StudentContext";

const students = [
  { id: 101, name: "Inthusha", roll: "CS101" },
  { id: 102, name: "Arun", roll: "CS102" },
  { id: 103, name: "Priya", roll: "CS103" },
  { id: 104, name: "Karthik", roll: "CS104" },
  { id: 105, name: "Meena", roll: "CS105" },
];

function StudentList() {
  const { favourites, addFavourite } = useContext(StudentContext);
  const [message, setMessage] = useState("");

  function handleAdd(student) {
    const added = addFavourite(student);
    setMessage(
      added
        ? `${student.name} added to favourites`
        : `${student.name} is already in favourites`
    );
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 rounded-md">
        <Navbar />
        <p className="mb-3">All students</p>
        {message && <p className="mb-3 text-sm">{message}</p>}

        <div className="flex gap-5 flex-wrap">
          {students.map((student) => {
            const isFav = favourites.some((f) => f.id === student.id);
            return (
              <div
                key={student.id}
                className="border border-black rounded-md p-4 w-56"
              >
                <h2 className="text-xl font-medium">{student.name}</h2>
                <p>Roll No: {student.roll}</p>
                <p className="mb-3">ID: {student.id}</p>
                <button
                  onClick={() => handleAdd(student)}
                  disabled={isFav}
                  className={`rounded-md px-3 py-1 ${
                    isFav ? "bg-gray-400 cursor-not-allowed" : "bg-[#FCA201]"
                  }`}
                >
                  {isFav ? "Added" : "Add to Favourite"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentList;