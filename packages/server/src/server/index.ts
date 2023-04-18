import Express from "express"
import morgan from "morgan"
import cors from "cors"
import pingRouter from "../modules/ping-pong/router"

const app = Express()

app.use(morgan("dev"))

app.use(Express.json())

app.use(cors())

app.get("/", (_req, res) => {
  res.send("Hello World!")
})

app.use(pingRouter())

export default app;