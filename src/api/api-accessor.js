import axios from "axios";
import configData from "../config.json";

const BaseApiUrl = configData.ApiUrl;

export async function calculation(options) {
    return await axios.post(`${BaseApiUrl}/Calculation`, options)
                        .then((response) => response.data)
                        .catch((error) => console.error(error));
}

export async function getAllTunnels() {
    return await axios.get(`${BaseApiUrl}/Tunnels`)
                        .then((response) => response.data)
                        .catch((error) => console.error(error));
}

export async function getTunnel(id) {
    return await axios.get(`${BaseApiUrl}/Tunnel/${id}`)
                        .then((response) => response.data)
                        .catch((error) => console.error(error));
}