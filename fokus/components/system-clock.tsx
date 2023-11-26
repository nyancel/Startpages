"use client";

import { useEffect, useState } from "react";
import { start } from "repl";

export default function SystemClock() {
    const startDate = new Date();
    const [currentTime, setCurrentTime] = useState(startDate);

    useEffect(() => {
        const updateTime = () => {
            const currentDatetime = new Date();
            setCurrentTime(currentDatetime);
        };
        const updateInterval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(updateInterval);
        }
    }, []);

    return (
        <div className="flex flex-col">
            <div>
                <p className="text-dg-600 font-bold text-xl">{currentTime.toLocaleTimeString("en-uk")}</p>
            </div>
            <div>
                <p className="text-dg-800">{currentTime.toLocaleDateString("en-uk")}</p>
            </div>
        </div>
    );
}