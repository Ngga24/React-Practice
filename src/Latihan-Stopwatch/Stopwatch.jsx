import { useState, useEffect, useRef } from "react";

function  Stopwatch() {
    const [second, setSecond] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const intervalRef = useRef(null);
    
    // Menggunakan useEffect untuk mengatur timer
    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setSecond((prev)=>prev+1)
            }, 1000)
        }

        //Membersihkan timer ketika terjadi aksi pause atau reset
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning]);

    function handleStart() {
        setRunning(true);
    }

    function handlePause() {
        setRunning(false);
    }

    function handleReset() {
        setRunning(false);
        setSecond(0);
    }


    return(
        <div>
            <h2>Stopwatch</h2>
            <p>second: {second}</p>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handlePause} disabled={!isRunning}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch;