import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Date_Time_creater from './Date_Time_creater'
import { useContext } from 'react'
import { constext_api } from './Context_api/context_api'
function All_task() {

    const { timer, settimer, actual_time, pending_data, set_pending_data } = useContext(constext_api)
    // console.log(actual_time.hours_for_user_input);
    console.log(pending_data);
    console.log(timer);

    const [parsed_data, set_parsed_data] = useState([])
    let fetcher = useCallback(async () => {
        let fetched_data = fetch('http://localhost:3500/Crud_apis/get')
        // console.log(fetched_data);

        let data = await fetched_data
        let parsed_data = await data.json()
        set_parsed_data(parsed_data)

    }, [])
    useEffect(() => {
        fetcher()
    }, [fetcher])
    let delete_task = (id_param) => {
        fetch('http://localhost:3500/Crud_apis/delete', {
            method: "DELETE",
            body: JSON.stringify({ _id: id_param }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((D) => {
            console.log(
                D.json()
                    .then(d => console.log(d))
            )

        })



    }
    ////------PENDING TASK DISPACTHER LOGIC-------------
    useEffect(() => {
        pending_sender()
    }, [actual_time])
    const pending_sender = useCallback(() => {
        console.log(pending_data);

        let real_time = actual_time.hours_for_user_input;
        for (let index = 0; index < parsed_data.length; index++) {
            if (pending_data.length < 1) {
                if (parsed_data[index].Time.time_hours <= real_time) {
                    let pender = parsed_data[index]

                    set_pending_data((prev) => (
                        [...prev, pender]
                    ))
                }
            }
            else {
                let id_finder = parsed_data[index]
                // console.log(parsed_data[0]._id, pending_data[0]._id)
                let a = pending_data.includes((id_finder))
                if (!a && id_finder.Time.time_hours <= real_time) {

                    set_pending_data((prev) =>
                    (
                        [...prev, id_finder]
                    )

                    )
                } else {
                    console.log(" pending");

                }

            }

        }

    }, [actual_time])
    // console.log(pend);

    return (
        <>
            <div style={{ marginTop: "30px" }}>

                {
                    parsed_data.map((v, i) => {
                        // console.log(v.Time.time_hours)
                        return (

                            // console.log(v)
                            <>
                                <div key={v._id} style={{ margin: "10px", backgroundColor: "yellowgreen", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    <b>TASK : </b> <p style={{ color: "red" }}> {v.Task}</p>
                                    <b>DESCRIPTION :</b><p style={{ color: "red" }} >{v.Description}</p>
                                    <div>
                                        <button style={{ height: "100%" }} >Compelet</button>
                                        <button style={{ height: "100%" }} onClick={() => {
                                            delete_task(v._id)
                                        }} > Delete</button>
                                        <p>
                                            <b>Time of task  </b>
                                            {v.Time.time_hours}:{v.Time.time_minutes} {v.Time.timeZone}


                                        </p>
                                    </div>

                                </div>
                            </>
                        )
                    }
                    )
                }
            </div >
        </>
    )
}

export default All_task