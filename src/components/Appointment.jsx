import { FaRegCalendarAlt } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";

function Appointment() {
  const navigate = useNavigate();
  const { selectedDoctor, selectedDate, selectedTime } = useDoctor();

  return (
    <section className="max-w-4xl mx-auto mt-16 px-5">
      <div className="bg-[#ededed] rounded-md p-6 flex justify-between items-start">

        {/* Left Side */}
        <div className="flex gap-5">

          {/* dr logo */}
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
            <p className="text-2xl font-bold uppercase text-pink-700">
              {selectedDoctor?.initials}
            </p>
          </div>

          {/* Doctor Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <p className="text-[30px] font-bold text-gray-900">
                {selectedDoctor?.name}
              </p>

              <p className="bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1 rounded-full">
                Upcoming
              </p>
            </div>

            <p className="text-gray-500 ">
              {selectedDoctor?.speciality}
            </p>

            <div className="flex items-center gap-8 ">
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-cyan-700" />
                <p className="font-medium">
                  {selectedDate?.month} {selectedDate?.date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <LuClock3 className="text-cyan-700" />
                <p className="font-medium">{selectedTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <button
          className="text-pink-700 font-semibold hover:underline"
          onClick={() => navigate("/cancel-appointment")}
        >
          Cancel
        </button>

      </div>
    </section>
  );
}

export default Appointment;