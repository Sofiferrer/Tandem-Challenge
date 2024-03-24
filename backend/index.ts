import dotenv from "dotenv";
import { config } from "dotenv";
config();
const PORT: number | string = process.env.PORT || 3001;

import server from "./src/app";

server.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}, FELIZ PRUEBA TECNICA!`); // eslint-disable-line no-console
});
