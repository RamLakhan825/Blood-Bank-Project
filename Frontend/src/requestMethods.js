import axios from "axios";

const BASE_URL = "https://blood-bank-project-n8jv.vercel.app/api/v1";

export const publicRequest = axios.create({
    baseURL: BASE_URL
}
)
