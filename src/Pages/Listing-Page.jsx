import "../App.css";
import { CiSearch } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";

function ListingPage() {
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
            <CiSearch  size={20} />
            <input
              className="py-2 min-w-100 focus:ring-none outline-none border  border-none ring-none"
              type="text"
              placeholder="Search bye name or speciality..."
            />
          </div>
          <div className="filter-tags py-5 flex gap-2 flex-wrap leading-wider">
            <a href="#" className="tags border-1 text-center px-3 rounded-full">
              All
            </a>
            <a
              href="#"
              className="tags border-1 text-center  px-3 rounded-full"
            >
              Cardiologist
            </a>
            <a href="#" className="tags border-1 text-center px-3 rounded-full">
              Dermalogist
            </a>
            <a
              href="#"
              className="tags border-1 text-center  px-3 rounded-full"
            >
              Dentist
            </a>
            <a
              href="#"
              className="tags border-1 text-center  px-3 rounded-full"
            >
              Pediatrician
            </a>
            <a
              href="#"
              className="tags border-1 text-center  px-3 rounded-full"
            >
              Neurologist
            </a>
            <a
              href="#"
              className="tags border-1 text-center  px-3 rounded-full"
            >
              Orthopedic
            </a>
            <a
              href="#"
              className="tags border-1 text-center  px-3 rounded-full"
            >
              General Physician
            </a>
          </div>
        </div>

        {/* Card Section Start */}
          <h4 className="text-slate-500 tracking-wider py-5">16 Doctors</h4>
        <div className="cards-container grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-2">
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar color="#EC4899" /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center flex-wrap">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
          <div className="card surface px-4 py-5">
            <div className="card-header py-2">
              <div className="flex gap-3">
                <div className="card-img p-2 bg-orange-300 rounded-full text-xl  text-center max-w-14 h-12">
                  SM
                </div>
                <div className="flex gap-2 flex-col">
                  <h4>Dr. Sarah Wilson</h4>
                  <a href="#" className="w-fit border px-2 py-1">
                    Cardiologist
                  </a>
                </div>
              </div>
            </div>

            <div className="rating flex gap-2 items-center py-3">
              <IoMdStar /> <span>4.9 </span>
              <span>14yrs exp</span>
              <span>$180 Visit</span>
            </div>

            <div className="book flex gap-3 justify-between items-center">
                <span className="text-cyan-600 text-md">• Available Today</span>

                <button className="book-btn">
                    Book Now
                </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListingPage;
