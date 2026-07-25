import { FaCheck } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Time() {
    return (
        <>
            <section className="mt-15 max-w-6xl mx-auto px-45">

                <div className="flex gap-2 items-center text-[#0088b0]">
                    <div className=""><FaArrowLeft /></div>
                    <p className="text-md tracking-wider font-semibold">Back to doctors</p>
                </div>

                {/* date time review */}
                <div className="flex gap-2.5 mt-7">
                    <div className="flex gap-1 items-center">
                        <div className="  w-8 h-8 rounded-full bg-[#0088b0] text-white flex items-center justify-center">
                            <FaCheck color="" className="rotate-1" size={15} />
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
                            <p className=" w-15 h-15 uppercase rounded-full text-xl text-[#d6006c] py-3.5 bg-[#fdf0f6]  text-center">sw</p>
                        </div>

                        <div className="tracking-wider flex flex-col gap-0.5">
                            <p className="text-xl font-bold">Dr.Sarah Wilson</p>
                            <p className="text-md text-gray-700">cardiologist 14 yrs expert</p>
                        </div>
                    </div>

                </div>


                {/* time */}

                <div className="mt-7 flex flex-col gap-1.5 tracking-wider">
                    <p className="text-2xl font-bold">Choose a Time</p>
                    <p className="text-lg text-gray-700">Availability for july 25 , 2026.</p>
                </div>

                {/* select */}

                <div className="mt-5 flex gap-6">
                    <div className="flex gap-1.5 text-md font-semibold">
                        <input type="checkbox" className="" />
                        <p>open</p>
                    </div>
                    <div className="flex gap-1.5 text-md font-semibold">
                        <input type="checkbox" />
                        <p>Selected</p>
                    </div>
                    <div className="flex gap-1.5 text-md font-semibold"  >
                        <input type="checkbox" />
                        <p>booked</p>
                    </div>

                </div>

                <div className="mt-7 grid grid-cols-6 gap-5">

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        09:00 AM
                    </div>

                    <div className="px-3 py-2 bg-[#0088b0] border border-[#bbbab9] text-center text-white rounded-sm ">
                        09:30 AM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        10:00 AM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        10:30 AM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        11:00 AM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        11:30 AM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        12:00 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        12:30 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        01:00 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        01:30 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        02:00 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        02:30 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        03:00 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        03:30 PM
                    </div>

                    <div className="px-3 py-2 bg-white border border-[#bbbab9] text-center rounded-sm">
                        04:00 PM
                    </div>


                </div>

                    {/* buttons */}
                <div className="mt-7 flex justify-between">
                    <div>
                        <button className=" border px-3 py-2 border-[#bbbab9] font-bold rounded-sm ">Back</button>
                    </div>
                    <div>
                        <button className="text-white tracking-wider px-3 py-2 font-bold rounded-sm bg-[#0088b0] hover:bg-[#1a9bc3]">
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
export default Time;