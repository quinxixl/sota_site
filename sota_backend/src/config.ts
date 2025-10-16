import { config } from "dotenv";

config();

export const BACK_PORT=process.env.BACK_PORT || 3000;