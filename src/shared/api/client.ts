import createClient from "openapi-fetch";
import type {paths} from "./schema.ts";

export const client = createClient<paths>({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
        "api-key": import.meta.env.VITE_API_KEY
    }
});