import { WeatherInterface } from "../mongoose/weather/interface";
import { findByZip, updateByZip } from "../mongoose/weather/services";

export const resolvers = {
    Query: {
        weather: async (_: any, param: WeatherInterface) => {
            let data = await findByZip(param.zip);
            return [data];
        }
    },
    Mutation: {
        weather: async (_: any, param: { data: WeatherInterface }) => {
            await updateByZip(param.data.zip, param.data);
            let data = await findByZip(param.data.zip);
            return [data];
        }
    }
};

