import { FaRegCalendarAlt } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

function Appointment() {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-5">
      <div className="bg-[#ededed] rounded-md p-6 flex justify-between items-start">

        {/* Left Side */}
        <div className="flex gap-5">

          {/* dr logo */}
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
            <p className="text-2xl font-bold uppercase text-pink-700">
              SW
            </p>
          </div>

          {/* Doctor Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <p className="text-[30px] font-bold text-gray-900">
                Dr. Sarah Wilson
              </p>

              <p className="bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1 rounded-full">
                Upcoming
              </p>
            </div>

            <p className="text-gray-500 ">
              Cardiologist
            </p>

            <div className="flex items-center gap-8 ">
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-cyan-700" />
                <p className="font-medium">July 25, 2026</p>
              </div>

              <div className="flex items-center gap-2">
                <LuClock3 className="text-cyan-700" />
                <p className="font-medium">10:00 AM</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              Booked Jul 24
            </p>
          </div>
        </div>

        {/* Right Side */}
        <button className="text-pink-700 font-semibold hover:underline">
          Cancel
        </button>

      </div>
    </section>
  );
}

export default Appointment;