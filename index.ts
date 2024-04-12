import express, {Request, Response} from "express";
import {
  routeHello,
  routeAPINames,
  routeWeather,
} from "./routes.js";
import path from "path";

const server = express();
const port = 3000;

server.get("/hello", function (_req: Request, res: Response): void {
  const response = routeHello();
  res.send(response);
});

server.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
  let response: string;
  try {
    response = await routeAPINames();
    res.send(response)
  } catch (err) {
    console.log(err);
  }
})

server.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
  const response = routeWeather({zipcode: req.params.zipcode});
  res.send(response);
})

server.get("/components/weather", function (req: Request, res: Response): void {
  const filePath = path.join(process.cwd(), "public", "weather.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(filePath);
})

server.listen(port, function (): void {
  console.log(" Listening on " + port);
});
