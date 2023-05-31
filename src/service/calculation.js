import uuid from "react-uuid";

import { calculation, getAllTunnels } from "../api";
import { mileToMeter } from "../util";

export const calculateMeter = async (mile) => {
    const tunnels = await getAllTunnels();
    const tunnel = tunnels.find(({start, end}) => mile <= start && mile >= end);
    if (tunnel) {
        const result = await calculation({
            id: uuid(),
            input: mile,
            inputUnitType: 'miles',
            requestedBy: 'user@example.com',
            tunnel: tunnel,
        });
        if (result) {
            return result.distanceInTunnel;
        }
    }
    return -1;
};

export const calculateMile = async (meter) => {
    const tunnels = await getAllTunnels();
    // Get first tunnel which has the minimum length
    const tunnel = tunnels.find(({start, end}) => mileToMeter(start - end) >= meter);
    if (tunnel) {
        const result = await calculation({
            id: uuid(),
            input: +meter,
            inputUnitType: 'metres',
            requestedBy: 'user@example.com',
            tunnel: tunnel,
        });
        if (result) {
            return result.chainageOnTrack;
        }
    }
    return -1;
};
