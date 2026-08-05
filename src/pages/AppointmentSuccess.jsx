import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";

function AppointmentSuccess() {
  const navigate = useNavigate();
  const { selectedDoctor, selectedDate, selectedTime } = useDoctor();

  return (
    <div className="fixed inset-0 bg-black/35 flex justify-center items-center z-[999]">
      <div className="w-[450px] bg-white rounded-md p-7 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">

        <div className="flex justify-center mb-5">
          <div className="w-[50px] h-[50px] rounded-full bg-[#E8F8FD] flex justify-center items-center text-[#0088B0] text-[26px] font-bold">
            ✓
          </div>
        </div>

        <h3 className="text-center mb-[18px] text-2xl font-bold text-gray-900">
          Appointment confirmed 🎉
        </h3>

        <p className="text-center text-gray-700 text-lg leading-relaxed mb-7">
          Your appointment with <strong>{selectedDoctor?.name}</strong> has been
          successfully booked.
        </p>

        <div className="bg-[#F8F8F8] p-[18px] mb-7">
          <div className="flex justify-between mb-[18px]">
            <span className="text-gray-600 text-lg">Date</span>
            <strong className="text-lg">
              {selectedDate?.month} {selectedDate?.date}
            </strong>
          </div>

          <div className="flex justify-between mb-0">
            <span className="text-gray-600 text-lg">Time</span>
            <strong className="text-lg">{selectedTime}</strong>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="w-[165px] h-[46px] bg-white border border-[#d6d6d6] font-semibold text-gray-900 cursor-pointer text-base"
            onClick={() => navigate("/")}
          >
            Book Another
          </button>

          <button
            className="w-[210px] h-[46px] bg-[#0088B0] border-none text-white font-semibold cursor-pointer text-base"
            onClick={() => navigate("/appointments")}
          >
            View My Appointments
          </button>
        </div>

      </div>
    </div>
  );
}

export default AppointmentSuccess;