import { useContext, useEffect, useState } from 'react';
import { constext_api, Context_provider } from './Context_api/context_api.jsx'
function Date_Time_creater() {
    const { timer, settimer, actual_time, set_actual_time } = useContext(constext_api)

    const [time, setTime] = useState(
        {
            time: {
                Hours: 0,
                Minutes: 0
            },
            time_zone: "AM"
        }
    )

    useEffect(() => {
        settimer((prev) => (
            time
        ))

    }, [time])
    useEffect(() => {
        setTimeout(() => {
            set_actual_time({ hours_for_user_input, minutes_for_user_input })
        }, 5000);
    }, [actual_time])


    // ----------------DATE CREATER COPIED FROM GPT-----------------------------------
    let date_time = new Date();
    // Get hours, minutes, and seconds
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let seconds = date_time.getSeconds();


    let ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert 24-hour time to 12-hour time
    hours = hours % 12;  // This will give a result between 0 and 11
    let hours_for_user_input = hours = hours ? hours : 12;
    // Format minutes and seconds with leading zeros

    let minutes_for_user_input = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // Combine into final time string
    let timeString = `${hours_for_user_input}:${minutes_for_user_input}:${seconds} ${ampm}`;
    // console.log(timeString);

    // If hour is 0 (midnight), set it to 12
    // ----------------DATE CREATER COPIED FROM GPT END-----------------------------------
    return (
        <>
            <div style={{ marginLeft: "15px" }}>
                Time:
                <input
                    type="number" value={time.time.Hours}
                    onChange={(e) => {
                        setTime((updater) => (
                            {
                                ...updater,
                                time: {
                                    ...updater.time,
                                    Hours: e.target.value
                                }
                            }
                        ))
                    }}
                    style={{
                        width: "35px",
                        padding: "5px",
                        fontSize: "17px",
                    }}
                /> <input
                    type="number" value={time.time.Minutes}
                    onChange={(e) => {
                        setTime((updater) => (
                            {
                                ...updater,
                                time: {
                                    ...updater.time,
                                    // Minutes: Number(e.target.value) + 5
                                    Minutes: Number(updater.time.Minutes) + 5

                                }
                            }
                        ))
                        console.log(minutes);
                    }}
                    style={{
                        width: "35px",
                        padding: "5px",
                        fontSize: "17px",
                    }}
                />
                <select name="DAY_ZONE" id="DAY_ZONE" onChange={(e) => {
                    setTime((updater) => (
                        {
                            ...updater,
                            time_zone: e.target.value
                        }
                    ))
                }} >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
        </>
    )
}


export default Date_Time_creater