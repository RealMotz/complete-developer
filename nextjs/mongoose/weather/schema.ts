import { Schema } from "mongoose";
import { WeatherInterface } from "./interface";

export const WeatherSchema = new Schema<WeatherInterface>({
    zip: {
      type: "String",
      required: true,
    },
    weather: {
      type: "String",
      required: true,
    },
    tempC: {
      type: "String",
      required: true,
    },
    tempF: {
      type: "String",
      required: true,
    },
    friends: {
      type: ["String"],
      required: true,
    },
});