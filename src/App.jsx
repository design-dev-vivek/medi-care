
import ListingPage from "./Pages/Listing-Page"
import AppointmentPage from "./Pages/AppointmentSuccess"
import CancelAppointment from "./Pages/CancelAppointment"
import EmptyAppointment from "./Pages/EmptyAppointment"
import Navbar from "./Components/Navbar"

function App(){
    return(
        <>
        <Navbar />
        {/* <AppointmentPage></AppointmentPage> */}
        {/* <CancelAppointment></CancelAppointment> */}
        {/* <EmptyAppointment></EmptyAppointment> */}
        <ListingPage></ListingPage>
        </>
    )
}
export default App
