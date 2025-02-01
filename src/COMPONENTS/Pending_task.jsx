import React, { useContext } from 'react'
import { constext_api } from './Context_api/context_api'

function Pending_task() {
    const { pending_data } = useContext(constext_api)

    console.log(pending_data);

    return (
        <>
            {
                // pending_data.map((v, i) => {
                //     return (
                //         <>
                //             <div>
                //                 {v.Time}
                //             </div>
                //         </>
                //     )
                // })

                <h1>PENDING TASK</h1>

            }

        </>

    )
}

export default Pending_task