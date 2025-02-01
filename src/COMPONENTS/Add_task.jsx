import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useAsyncError } from 'react-router-dom'
import Date_Time_creater from './Date_Time_creater'
import { constext_api } from './Context_api/context_api'

function Add_task() {
    const { timer, settimer, actual_time, set_actual_time } = useContext(constext_api)
    const [Tasks, setTasks] = useState(
        {
            Task: "",
            Description: ""
        }
    )
    let add_task = () => {


        fetch('http://localhost:3500/Crud_apis/post',
            {
                method: 'POST',
                body: JSON.stringify({
                    Task: Tasks.Task,
                    Description: Tasks.Description,
                    Time: {
                        time_hours: timer.time.Hours,
                        time_minutes: timer.time.Minutes,
                        timeZone: timer.time_zone
                    }

                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then(async (res) => {
            let response = await res.json()
            console.log(response);

            if (!res.ok) {
                throw new Error(response.schema_error)
            }
            else {
                console.log(response);

            }
        }).catch(async (err) => {
            console.log(err.message)
            // console.log({ validation_erro: err.message })
        })
        // ________________________

        // fetcher()
    }


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center", marginTop: "2%" }}>
                <input placeholder='Enter Task' onChange={(e) => {
                    setTasks((updater) => (
                        {
                            ...updater,
                            Task: e.target.value
                        }
                    ))
                }} />
                <input placeholder='Description' onChange={(e) => {
                    setTasks((updater) => (
                        {
                            ...updater,
                            Description: e.target.value
                        }
                    ))
                }} />
                <button onClick={() => {
                    add_task()
                }}>Add It</button>
                <Date_Time_creater />
            </div>
        </div >
    )
}

export default Add_task