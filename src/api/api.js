import axios from "axios";
import { toast } from "react-toastify";

import { config } from "../config";

const { ApiUrl: BaseApiUrl } = config;

export async function calculation(options) {
    return await axios.post(`${BaseApiUrl}/Calculation`, options)
        .then((response) => response.data)
        .catch((error) => toast(error.message));
}

export async function calculationResults() {
    return await axios.get(`${BaseApiUrl}/CalculationResults`)
        .then((response) => response.data)
        .catch((error) => toast(error.message));
}

export async function getAllTunnels() {
    return await axios.get(`${BaseApiUrl}/Tunnels`)
        .then((response) => response.data)
        .catch((error) => toast(error.message));
}

export async function getTunnel(id) {
    return await axios.get(`${BaseApiUrl}/Tunnel/${id}`)
        .then((response) => response.data)
        .catch((error) => toast(error.message));
}
