import "./AppointmentSuccess.css";

 function AppointmentSuccess() {
  return (
    <div className="success-overlay">
      <div className="success-modal">

        <div className="success-icon">
          <div className="success-circle">
            ✓
          </div>
        </div>

        <h2>Appointment confirmed</h2>

        <p>
          Your appointment with <strong>Dr. Sarah Wilson</strong> has been
          successfully booked.
        </p>

        <div className="appointment-details">
          <div className="detail-row">
            <span>Date</span>
            <strong>July 25, 2026</strong>
          </div>

          <div className="detail-row">
            <span>Time</span>
            <strong>10:00 AM</strong>
          </div>
        </div>

        <div className="modal-buttons">
          <button className="secondary-btn">
            Book Another
          </button>

          <button className="primary-btn">
            View My Appointments
          </button>
        </div>

      </div>
    </div>
  );
} export default  AppointmentSuccess;