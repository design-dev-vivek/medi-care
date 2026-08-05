import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

function buildCalendarDates() {
    const today = new Date();
    return Array.from({ length: 14 }, (_, i) => {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        return {
            day: DAY_NAMES[day.getDay()],
            date: day.getDate(),
            month: MONTH_NAMES[day.getMonth()],
        };
    });
}

function DateStep() {
    const navigate = useNavigate();
    const { selectedDoctor, setSelectedDate } = useDoctor();
    const [calendarDates] = useState(buildCalendarDates);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <section className=" mt-15 max-w-6xl mx-auto px-45  ">
                {/* back to doctor  */}
                <div
                    className="flex gap-2 items-center text-[#0088b0] cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <div className=""><FaArrowLeft /></div>
                    <p className="text-md tracking-wider font-semibold">Back to doctors</p>
                </div>


                {/* date time review */}
                <div className="flex gap-2.5 mt-7">
                    <div className="flex gap-1 items-center">
                        <div className=" pb-0.5 w-8 h-8 rounded-full bg-[#0088b0] text-white flex items-center justify-center">
                            1
                        </div>
                        <p className="font-semibold">Date</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <div className=" pb-0.5 w-8 h-8 rounded-full bg-[#bbbab9] text-white flex items-center justify-center">
                            2
                        </div>
                        <p className="font-semibold">Time</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <div className=" pb-0.5 w-8 h-8 rounded-full bg-[#bbbab9] text-white flex items-center justify-center">
                            3
                        </div>
                        <p className="font-semibold">Review</p>
                    </div>
                </div>

                {/* doctors details */}
                <div className="mt-7 rounded-lg bg-[#eaeae9] px-4 py-6">
                    <div className="flex gap-4">
                        <div className="">
                            <p className=" w-15 h-15 uppercase rounded-full text-xl text-[#d6006c] py-3.5 bg-[#fdf0f6]  text-center">
                                {selectedDoctor?.initials}
                            </p>
                        </div>

                        <div className="tracking-wider flex flex-col gap-0.5">
                            <p className="text-xl font-bold">{selectedDoctor?.name}</p>
                            <p className="text-md text-gray-700">
                                {selectedDoctor?.speciality} {selectedDoctor?.experience}
                            </p>
                        </div>
                    </div>

                </div>

                {/* date */}

                <div className="mt-7 flex flex-col gap-1.5 tracking-wider">
                    <p className="text-2xl font-bold">Choose a Date</p>
                    <p className="text-lg text-gray-700">Select from the next two weeks</p>
                </div>

                {/* calendar */}

                <div className="mt-7 grid grid-cols-7 gap-5 text-center">

                    {calendarDates.map((item, index) => {
                        const isActive = index === selectedIndex;
                        return (
                            <div
                                key={`${item.month}-${item.date}`}
                                onClick={() => setSelectedIndex(index)}
                                className={`rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2 cursor-pointer ${
                                    isActive ? "bg-[#0088b0]" : "bg-white"
                                }`}
                            >
                                <p className={isActive ? "text-white" : "text-[#747271]"}>{item.day}</p>
                                <p className={`text-lg font-bold ${isActive ? "text-white" : "text-black"}`}>
                                    {item.date}
                                </p>
                                <p className={isActive ? "text-white" : "text-[#747271]"}>{item.month}</p>
                            </div>
                        );
                    })}

                </div>

                {/* buttons */}

                <div className="mt-7 flex justify-between">
                    <div>
                        <button
                            className=" border px-3 py-2 border-[#bbbab9] font-bold rounded-sm "
                            onClick={() => navigate("/")}
                        >
                            Back to doctor
                        </button>
                    </div>
                    <div>
                        <button
                            className="text-white tracking-wider px-3 py-2 font-bold rounded-sm bg-[#0088b0] hover:bg-[#1a9bc3]"
                            onClick={() => {
                                setSelectedDate(calendarDates[selectedIndex]);
                                navigate("/booking/time");
                            }}
                        >
                                Choose a time
                        </button>
                    </div>
                </div>

                <div className="mt-34">

                </div>


            </section>

        </>
    )
}
export default DateStep;