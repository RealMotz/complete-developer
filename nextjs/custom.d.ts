interface WeatherProps {
    weather: string;
}

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

type responseItemType = {
    id: string;
    name: string;
};