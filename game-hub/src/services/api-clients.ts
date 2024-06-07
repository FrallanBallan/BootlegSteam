import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c37bcab1934246d5af5183ebef7f6ac8"
    }
})