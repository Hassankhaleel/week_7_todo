import { createContext, useMemo, useState } from "react";
const constext_api = createContext("")

const Context_provider = ({ children }) => {
    const [timer, settimer] = useState("d")
    const [actual_time, set_actual_time] = useState({})
    const [pending_data, set_pending_data] = useState([])
    // const memoized_satted = useMemo(() => {
    //     return (
    //         { timer, settimer, actual_time, set_actual_time, set_pending_data, pending_data }
    //     )
    // }, [actual_time])


    return (
        <>
            <constext_api.Provider value={{ timer, settimer, actual_time, set_actual_time, set_pending_data, pending_data }}>
                {children}
            </constext_api.Provider>
        </>
    )
}
export { Context_provider, constext_api }