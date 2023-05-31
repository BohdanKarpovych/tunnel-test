import { useEffect, useState } from "react"
import { getAllTunnels, calculation } from ".";
import uuid from 'react-uuid';

export const useCalculateMeter = (value) => {
    const [meter, setMeter] = useState("");
    useEffect(() => {
        const calculateMeter = async () => {
            const tunnels = await getAllTunnels();
            const tunnel = tunnels.find(({start, end}) => value <= start && value >= end);
            if (tunnel) {
                console.log(tunnel);
                const calculatedMeter = await calculation({
                    id: uuid(),
                    input: value,
                    inputUnitType: 'miles',
                    requestedBy: 'user@example.com',
                    tunnel: tunnel,
                });
                setMeter(calculatedMeter.distanceInTunnel);
            }
        };
        calculateMeter();
    }, [value]);
    return meter;
}