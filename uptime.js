import os from 'os';
export function getUptime() {
    const uptimeSeconds = os.uptime();
    return uptimeSeconds;
}
