import { FaArrowLeft } from "react-icons/fa";
function Date() {
    return (
        <>
            <section className=" mt-15 max-w-6xl mx-auto px-45  ">
                {/* back to doctor  */}
                <div className="flex gap-2 items-center text-[#0088b0]">
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
                            <p className=" w-15 h-15 uppercase rounded-full text-xl text-[#d6006c] py-3.5 bg-[#fdf0f6]  text-center">sw</p>
                        </div>

                        <div className="tracking-wider flex flex-col gap-0.5">
                            <p className="text-xl font-bold">Dr.Sarah Wilson</p>
                            <p className="text-md text-gray-700">cardiologist 14 yrs expert</p>
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

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">FRI</p>
                        <p className="text-black text-lg font-bold">24</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-[#0088b0] rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-white">SAT</p>
                        <p className="text-white text-lg font-bold">25</p>
                        <p className="text-white">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">SUN</p>
                        <p className="text-black text-lg font-bold">26</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">MON</p>
                        <p className="text-black text-lg font-bold">27</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">TUE</p>
                        <p className="text-black text-lg font-bold">28</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">WED</p>
                        <p className="text-black text-lg font-bold">29</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">THU</p>
                        <p className="text-black text-lg font-bold">30</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">FRI</p>
                        <p className="text-black text-lg font-bold">31</p>
                        <p className="text-[#747271]">July</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-5 py-2">
                        <p className="text-[#747271]">SAT</p>
                        <p className="text-black text-lg font-bold">1</p>
                        <p className="text-[#747271]">August</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">SUN</p>
                        <p className="text-black text-lg font-bold">2</p>
                        <p className="text-[#747271]">August</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">MON</p>
                        <p className="text-black text-lg font-bold">3</p>
                        <p className="text-[#747271]">August</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">TUE</p>
                        <p className="text-black text-lg font-bold">4</p>
                        <p className="text-[#747271]">August</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">WED</p>
                        <p className="text-black text-lg font-bold">5</p>
                        <p className="text-[#747271]">August</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">THU</p>
                        <p className="text-black text-lg font-bold">6</p>
                        <p className="text-[#747271]">August</p>
                    </div>

                    <div className="bg-white rounded-sm border border-[#bbbab9] shadow-[#bbbab9] shadow-md px-7 py-2">
                        <p className="text-[#747271]">FRI</p>
                        <p className="text-black text-lg font-bold">7</p>
                        <p className="text-[#747271]">August</p>
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
export default Date;