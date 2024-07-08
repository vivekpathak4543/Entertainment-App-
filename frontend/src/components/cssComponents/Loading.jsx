import React from 'react'
import { Vortex } from "react-loader-spinner";

// loading spinner 
function Loading() {
    return (
        <div className="w-full h-4/5 flex items-center justify-center">
            <Vortex height={100} width={100} />
        </div>
    )
}

export default Loading