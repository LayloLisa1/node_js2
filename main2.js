import { DataOperations, StringOperations } from './index2.js';
const command = process.argv[2];
const data = process.argv[3];
const option = process.argv[4];
switch (command) {
    case 'filter':
        console.log(DataOperations.filterArray(JSON.parse(data), option));
        break;
    case 'sort':
        console.log(DataOperations.sortArray(JSON.parse(data)));
        break;
    case 'ascii':
        console.log(StringOperations.convertToASCII(data));
        break;
    case 'uppercase':
        console.log(StringOperations.changeCase(data, 'uppercase'));
        break;
    case 'lowercase':
        console.log(StringOperations.changeCase(data, 'lowercase'));
        break;
    default:
        console.log('Invalid command');
}
