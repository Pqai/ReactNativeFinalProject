import { createContext, useContext, useState } from "react";

const MeasurementSystemContext = createContext(null);

export const MeasureMentSystemProvider = ({ children }) => {
    const [measurementSystem, setMeasurementSystem] = useState("metric");

    return (
        <MeasurementSystemContext.Provider
            value={{
                measurementSystem,
                setMeasurementSystem
            }}
        >
            {children}
        </MeasurementSystemContext.Provider>
    )
}

export const useMeasurementSystemContext = () => {
    return useContext(MeasurementSystemContext);
}