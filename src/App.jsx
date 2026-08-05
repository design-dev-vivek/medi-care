import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ListingPage from "./Pages/Listing-Page";
import AppointmentSuccess from "./Pages/AppointmentSuccess";
import CancelAppointment from "./Pages/CancelAppointment";
import EmptyAppointment from "./Pages/EmptyAppointment";
import DateStep from "./components/Date";
import Time from "./components/Time";
import Review from "./components/Review";
import { DoctorProvider } from "./context/DoctorContext";

function App() {
    return (
        <DoctorProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<ListingPage />} />
                        <Route path="/appointments" element={<EmptyAppointment />} />
                        <Route path="/appointment-success" element={<AppointmentSuccess />} />
                        <Route path="/cancel-appointment" element={<CancelAppointment />} />
                        <Route path="/booking" element={<DateStep />} />
                        <Route path="/booking/time" element={<Time />} />
                        <Route path="/booking/review" element={<Review />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DoctorProvider>
    );
}

export default App;
