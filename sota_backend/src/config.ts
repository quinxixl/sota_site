import { config } from "dotenv";

config();

export const BACK_PORT=process.env.BACK_PORT || 3000;
export const BOT_TOKEN=process.env.BOT_TOKEN as string;
export const ADMIN_ID=process.env.ADMIN_ID ? JSON.parse(process.env.ADMIN_ID) : [];