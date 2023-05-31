import { useEffect } from "react"
import { getAllTunnels, calculation } from ".";
import uuid from 'react-uuid';

export const useCalculateMile = (value) => {
    useEffect(() => {
        const calculateMile = async () => {
            const tunnels = await getAllTunnels();
            const tunnel = tunnels.find(({start, end}) => value >= start && value <= end);
            if (tunnel) {
                const meter = await calculation({
                    id: uuid(),
                    input: value,
                    inputUnitType: 'miles',
                    requestedBy: 'user@example.com',
                    tunnel: tunnel,
                });
                
            }
        }
    }, [value]);
}