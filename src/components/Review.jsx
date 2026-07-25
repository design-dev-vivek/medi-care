import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Review() {
    return (
        <>
            <section className="mt-15 max-w-6xl mx-auto px-45 ">
                {/* back to doctor  */}
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
                        <div className="  w-8 h-8 rounded-full bg-[#0088b0] text-white flex items-center justify-center">
                            <FaCheck color="" className="rotate-1" size={15} />
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


                {/* date */}

                <div className="mt-7 flex flex-col gap-0.5 tracking-wider">
                    <p className="text-2xl font-bold">Review Booking</p>
                    <p className="text-md text-gray-700">Confirms the details below</p>
                </div>

                {/* doctor details */}
                <div className="mt-7  bg-[#eaeae9]  ">

                    <div className="px-12 py-10 flex flex-col gap-12 tracking-wider">
                        <div className="flex justify-between">
                            <div className="text-gray-500 text-md ">DOCTOR</div>
                            <div className="text-black text-md font-semibold">Dr. Sarah Wilson</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500 text-md ">SPECIALITY</div>
                            <div className="text-black text-md font-semibold">Cardiologist</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500 text-md ">DATE</div>
                            <div className="text-black text-md font-semibold">July 25 2036</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500 text-md ">TIME</div>
                            <div className="text-black text-md font-semibold">10:00 AM</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500 text-md ">CONSULTATION FEE</div>
                            <div className="text-black text-md font-semibold">$180</div>
                        </div>
                    </div>

                </div>

                {/* buttons */}

                <div className="mt-7 flex justify-between">
                    <div>
                        <button className=" border px-3 py-2 border-[#bbbab9] font-bold rounded-sm ">Back to doctor</button>
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
export default Review;