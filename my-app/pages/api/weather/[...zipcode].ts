import type { NextApiRequest, NextApiResponse } from "next";

type WeatherDetail = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetail> | void> {
    return res.status(200).json({
        zipcode: req.query.zipcode,
        weather: "sunny",
        temp: 35
    });
}