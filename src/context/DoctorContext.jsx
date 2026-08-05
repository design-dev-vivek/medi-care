import { createContext, useContext, useState } from "react";

const DoctorContext = createContext(null);

export function DoctorProvider({ children }) {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <DoctorContext.Provider
            value={{
                selectedDoctor, setSelectedDoctor,
                selectedDate, setSelectedDate,
                selectedTime, setSelectedTime,
            }}
        >
            {children}
        </DoctorContext.Provider>
    );
}

export function useDoctor() {
    return useContext(DoctorContext);
}
