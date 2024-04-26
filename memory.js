import os from 'os';
export function getFreeMemory() {
    const freeMemoryBytes = os.freemem();
    const freeMemoryMB = Math.round(freeMemoryBytes / (1024 * 1024));
    return freeMemoryMB;
}
