import React, { useState, useEffect } from "react";
import "../App.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

import DoctorCard from "../components/DoctorCard";
import doctors from "../data/doctors.json";
import SearchFilter from "../components/SearchFilter"
const FILTER_TAGS = [
  "All",
  "Cardiologist",
  "Dermatologist",
  "Dentist",
  "Pediatrician",
  "Neurologist",
  "Orthopedic",
  "General Physician",
];

function ListingPage() {
  // Why: the filter tags need to persist which one is selected, and that
  // selection has to survive re-renders, so it lives in state instead of a
  // plain variable. Defaults to "All" so every doctor shows on first load.
  // How: useState returns the current value plus a setter; calling the
  // setter (see the tag buttons below) triggers a re-render with the new value.
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClose = () => {
    setSearch("")
    setsearchData([])
  }


  const handleKeydown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem(prev => prev - 1)
      } else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
        setSelectedItem(prev => prev + 1)
      } else if (e.key === "Enter" && selectedItem >= 0) {

      }
    } else {
      setSelectedItem(-1)
    }

  }

  useEffect(() => {
  const newData = doctors.filter((spec) => {
    return (
      spec.name.toLowerCase().includes(search.toLowerCase()) ||
      spec.speciality.toLowerCase().includes(search.toLowerCase())
    );
  });

  setsearchData(newData);
}, [search]);

  // Why: the card list and the "N Doctors" count must always reflect the
  // active filter, and this is recalculated on every render rather than
  // stored separately so it can never drift out of sync with activeFilter.
  // How: when "All" is selected, use the full doctors list as-is; otherwise
  // keep only the doctors whose speciality matches the selected tag.
  // const filteredDoctors =
  //   activeFilter === "All"
  //     ? doctors
  //     : doctors.filter((doctor) => doctor.speciality === activeFilter);

  const filteredDoctors = doctors.filter((doctor) => {
  // Tag Filter
  const matchesFilter =
    activeFilter === "All" || doctor.speciality === activeFilter;

  // Search Filter
  const matchesSearch =
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.speciality.toLowerCase().includes(search.toLowerCase());

  return matchesFilter && matchesSearch;
});

  return (
    <>
      <div className=" main-container  lg:px-[126px] md:px-[66px] sm:px-[86px] py-10 w-full ">
        <h4 className="text-accent">FRI, JULY 25, 2026</h4>
        <h2 className="py-2">
          Find a doctor,<br></br>book a visit.
        </h2>
        <p className="leading-wide tracking-wider">
          Browse specialists across the practice, check whos's <br /> available,
          and reserve a time that works- all in few clicks.
        </p>

        <div className="serach-box">
          <div className="input-box flex gap-3 items-center mt-5  border border-gray-200 rounded-md w-100 px-2 ">
            <input
              className="py-2 min-w-100 focus:ring-none outline-none border  border-none ring-none"
              type="text"
              placeholder="Search by name or speciality..."
              onChange={handleChange}
              onKeyDown={handleKeydown}
              value={search}
            />

            <div className="icon">


              {
                search == "" ? <HiOutlineMagnifyingGlass /> : <HiOutlineXMark onClick={handleClose} />
              }

            </div>


          </div>

          <div className="search_result p-3.5 max-w-[250px] bg-[#EAE9E9] rounded-md mt-2 ">
            {searchData.slice(0 , 5).map((data, index) => {
              return (
                <p
                  key={index}
                  className={selectedItem === index ? "suggestion active" : "suggestion"}
                >
                  {data.speciality}  {data.name} 
                </p>
              );
            })}
          </div>
          {/* Why: the tags are rendered from the FILTER_TAGS array instead of
              being hand-written elements so there's a single source of truth
              for the available specialities, and clicking one just updates
              state rather than needing a handler per tag.
              How: map each tag name to a button; onClick calls setActiveFilter
              with that tag, and the className check re-applies the highlight
              style to whichever button matches the current activeFilter. */}
          <div className="filter-tags py-5 flex gap-2 flex-wrap leading-wider">
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveFilter(tag)}
                className={`tags border-1 text-center px-3 rounded-full cursor-pointer ${activeFilter === tag ? "bg-cyan-600 text-white border-cyan-600" : ""
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Card Section Start */}
        {/* Why: the count next to the grid should always match what's
            actually rendered, so it reads from filteredDoctors (not the raw
            doctors import) and updates automatically whenever the filter changes.
            How: filteredDoctors.length gives the live count; mapping over the
            same array spreads each doctor object as props onto DoctorCard,
            with id used as the React key since it's unique per doctor. */}
        <h4 className="text-slate-500 tracking-wider py-3">{filteredDoctors.length} Doctors</h4>
        <div className="cards-container grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ListingPage;
