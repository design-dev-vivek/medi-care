function CancelAppointmentModal({
  onKeep,
  onCancel,
}) {
  return (
    <div className="fixed inset-0 bg-black/35 flex justify-center items-center z-[999]">
      <div className="w-[470px] bg-[#f0f0f0] rounded-lg p-8 font-serif">
        <h3 className="text-2xl font-bold text-gray-900 mb-5">
          Cancel appointment?
        </h3>

        <p className="text-lg-gray-700 ">
          Are you sure you want to cancel your appointment with{" "}
          <strong className="font-bold">Dr. Sarah Wilson</strong> on{" "}
          <strong className="font-bold">July 25, 2026</strong> at{" "}
          <strong className="font-bold">10:00 AM</strong>?
        </p>

        <div className="mt-[30px] flex justify-end gap-3">
          <button
            className="px-[22px] py-3 border border-gray-300 bg-white text-gray-900 text-base font-bold cursor-pointer transition-colors duration-200 hover:bg-gray-100"
            onClick={onKeep}
          >
            Keep Appointment
          </button>

          <button
            className="px-[22px] py-3 border-none bg-pink-700 text-white text-base font-bold cursor-pointer transition-colors duration-200 hover:bg-pink-800"
            onClick={onCancel}
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelAppointmentModal;