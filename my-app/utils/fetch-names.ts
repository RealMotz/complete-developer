type responseItemType = {
    id: string;
    name: string;
};

export const fetchNames = async () => {
    // const url = "https://www.usemodernfullstack.dev/api/v1/users";
    const url = "https://www.usemodernfullstack.dev/api/v1/now";
    let data: responseItemType[] | [] = [];
    let names: responseItemType[] | [];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        names = [];
    }
    names = data.map((item) => {
        return { id: item.id, name: item.name };
    });
    return names;
};
