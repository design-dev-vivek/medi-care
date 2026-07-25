import "./CancelAppointment.css";

function CancelAppointmentModal({
  doctorName = "Dr. Sarah Wilson",
  date = "July 25, 2026",
  time = "10:00 AM",
  onKeep,
  onCancel,
}) {
  return (
    <div className="modal-overlay">
      <div className="cancel-modal">
        <h3>Cancel appointment?</h3>

        <p>
          Are you sure you want to cancel your appointment with{" "}
          <strong>{doctorName}</strong> on{" "}
          <strong>{date}</strong> at{" "}
          <strong>{time}</strong>?
        </p>

        <div className="modal-actions">
          <button className="keep-btn" onClick={onKeep}>
            Keep Appointment
          </button>

          <button className="cancel-btn" onClick={onCancel}>
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}export default CancelAppointmentModal;