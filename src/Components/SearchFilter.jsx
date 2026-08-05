import React, { useState } from "react";
import "../App.css";
// import { CiSearch } from "react-icons/react-icons/ci";
import Doctors from "../data/doctors.json";

function Searchfilter() {
  const [search, setSearch] = useState("");

  const filterDoctors = Doctors.filter((doctor) => {
    const nameMatch = doctor.name
      ?.toLowerCase()
      .startsWith(search.toLowerCase());
    const specMatch = doctor.speciality
      ?.toLowerCase()
      .startsWith(search.toLowerCase());
    return nameMatch || specMatch;
  });
  return (
    <>
      <div className="input-box flex gap-3 items-center mt-5 border border-gray-200 rounded-md w-full px-2">
        <CiSearch size={20} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 w-full outline-none border-none focus:outline-none"
          type="text"
          placeholder="Search by name or specialty..."
        />
      </div>

      {search !== "" && (
        <div className="mt-2 border rounded-md shadow bg-white">
          {filterDoctors.length > 0 ? (
            filterDoctors.map((doctor) => (
              <div
                key={doctor.id || doctor.name}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-gray-500 text-sm">
                  {doctor.speciality || doctor.specialzation}
                </p>
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No Doctor Found</p>
          )}
        </div>
      )}
    </>
  );
}

export default Searchfilter;
