import { getFreeMemory } from './memory.js';
import { getProcessInfo } from './process.js';
import { getUptime } from './uptime.js';
function printSystemInfo() {
    console.log(`Bo'sh xotira miqdori: ${getFreeMemory()} MB`);
    console.log('Jarayon haqida ma\'lumotlar:', getProcessInfo());
    console.log(`Tizimning ish vaqti: ${getUptime()} seconds`);
}

printSystemInfo();
