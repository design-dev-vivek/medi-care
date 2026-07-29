import { IoMdStar } from "react-icons/io";

function DoctorCard({ initials, avatarColor, name, speciality, rating, experience, fee, available }) {
    return (
        <>
            <div className="card surface p-5 rounded-lg">
                <div className="card-header py-2">
                    <div className="flex gap-3">
                        <div className={`card-img p-2 ${avatarColor} rounded-full text-[18px]  text-center w-12 h-12 flex justify-center items-center`}>
                            {initials}
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h4>{name}</h4>
                            <a href="#" className="w-fit border px-2 py-1">
                                {speciality}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rating flex gap-2 items-center py-3">
                    <IoMdStar color="#EC4899" /> <span>{rating} </span>
                    <span>{experience}</span>
                    <span>{fee}</span>
                </div>

                <div className="book flex gap-3 justify-between items-center flex-wrap">
                    <span className="text-cyan-600 text-md">
                        • {available ? "Available Today" : "Not Available"}
                    </span>

                    <button className="book-btn">
                        Book Now
                    </button>

                </div>
            </div>
        </>
    )
}

export default DoctorCard;
