const os = require('os');
const command = process.argv[2];
if (command === 'check-memory') {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const totalMemoryMB = Math.round(totalMemory / (1024 * 1024));
    const freeMemoryMB = Math.round(freeMemory / (1024 * 1024));
    console.log(`Free memory: ${freeMemoryMB} MB`);
} else {
    console.log('No command provided');
}
