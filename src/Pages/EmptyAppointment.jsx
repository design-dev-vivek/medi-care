import "../App.css"
import { BsCalendar4Event } from "react-icons/bs";
function EmptyAppointment() {
    return (
        <>
            <div className=" main-container  lg:px-[146px] md:px-[66px] sm:px-[86px] py-10 w-full ">
                <div className="heading">
                    <p className="py-2 text-4xl font-bold">My appointments</p>
                    <h5 className="font-normal ">Your booked visits will appear here.</h5>

                    <div className="blank-div flex items-center justify-center py-20 flex-col ">

                        <BsCalendar4Event className="text-gray-300 py-2 " size={96} />
                        <h3 className="py-2">No appointment yet.</h3>
                        <p className="text-center text-md text-gray-500">You haven't booked any appointments yet. Find a <br />specialist and reserve a time.</p>
                        <button className="book-btn mt-4 rounded-0">Browse Doctors</button>



                    </div>
                </div>



            </div>


        </>
    )
}
export default EmptyAppointment