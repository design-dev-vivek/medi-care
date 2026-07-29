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
                <h5>  Find a Doctor</h5>

                <div className="flex items-center gap-2">
                    <a href="#" className="font-bold text-m">
                        My Appointments
                    </a>
                    <span className="w-4 h-4 rounded-full bg-pink-700 text-white text-sm font-bold flex items-center justify-center">
                        1
                    </span>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;