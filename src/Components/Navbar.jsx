import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-[#ebebeb] px-8 py-5 flex items-center justify-between font-serif">

            <div className="text-xl font-bold text-gray-900">
                Meridian Health
            </div>

            <div className="text-sm text-gray-500 uppercase">
                Appointments Desk
            </div>

            <div className="flex items-center gap-8">
                <Link to="/">  Find a Doctor</Link>

                <div className="flex items-center gap-2">
                    <Link to="/appointments" className="font-bold text-m">
                        My Appointments
                    </Link>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
