'use client';
import { useState } from "react";

export type CountProps = {
    initialValue: number;
    increment: number;
}


export const Count = ({initialValue, increment}: CountProps)=> {

    const [count, setCount] = useState(initialValue);

    const handleClick = (inc: number) => {
        setCount(count + inc);
    }

    return(
        <div className="flex flex-col gap-5 items-center">
            <span className="text-lg">{count}</span>
            <button className="btn" onClick={()=>handleClick(increment)}>Incrementar</button>
        </div>
    )
}

