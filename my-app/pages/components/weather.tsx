import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

const PageComponentWeather : NextPage = () => {
    interface WeatherProps {
        weather: string
    }

    const WeatherComponent = (props: WeatherProps) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setCount(1);
        }, [])
        return (
            <h1 onClick={() => setCount(count + 1)}>
                The weather is {props.weather},
                and the counter shows {count}
            </h1>
        );
    }

    return (<WeatherComponent weather="sunny" />);
}

export default PageComponentWeather;