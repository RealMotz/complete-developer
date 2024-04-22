import type { NextApiRequest, NextApiResponse } from "next";

type ResponseItem = {
    id: string;
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) : Promise<NextApiResponse<ResponseItem[]> | void> {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json()) as ResponseItem[];
    } catch (err) {
        return res.status(500);
    }

    const names = data.map((item) => {
        return {id: item.id, name: item.name};
    });

    return res.status(200).json(names);
}