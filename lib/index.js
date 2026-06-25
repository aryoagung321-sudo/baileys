"use strict";
const makeWASocket = require('./Socket/index.js').default || require('./Socket/index.js');
const chalk = require('chalk').default || require('chalk');
console.log(chalk.bold.gray("-----------------------------------------\n"));
console.log(chalk.bold.cyan(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣤⣤⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠈⠉⠛⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢦⣶⣶⣶⣦⣄⠀
⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣦
⠀⢀⣀⣀⡀⠀⠀⡿⠀⠀⢀⣴⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⡟
⢀⣿⣿⣿⣿⣦⣄⡇⠈⠋⢸⣿⣿⣯⣼⠏⠀⠀⠀⠀⠀⢀⣰⣦⣄⠀⠀⠀⠀⢹⡿⠋⠀
⠈⣿⣿⣿⣿⣿⣿⣿⠀⠀⢀⣙⠛⠛⠁⠀⠀⣦⣤⡀⠀⣾⡟⣿⣿⣷⠀⠀⠀⢸⠂⠀⠀
⠀⠹⣿⣿⣿⣿⣿⣿⣧⡀⠉⠁⠀⠀⠀⠻⣤⣿⣉⣩⠀⠹⣷⣿⣿⡿⠀⠀⠀⣼⠀⠀⠀
⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠈⠉⠁⠀⠀⢨⡉⠉⠀⢸⠀⣼⠃⠀⠀⠀
⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⠀⠀⠀⠀⠀⠀⠑⠆⠀⣠⡾⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⡟⠛⠻⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣿⣏⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⠈⠙⠛⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡗⠒⠶⠤⠤⣶⣶⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠿⠃⠀⠀⠀⠀⠀⠀⠙⠿⠿⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
¤═―— ⎧ 𝐁𝐀𝐃𝐙𝐙 𝐁𝐀𝐈𝐋𝐄𝐘𝐒 ⎭ ⊱―—═¤
Information:
Developer: @badzzne2
Version: 11.0 GEN 2
Status: Baileys Berhasil Tersambung
`));
console.log(chalk.bold.white("Untuk informasi update lainnya langsung join @FoxsSql"));
console.log(chalk.bold.gray("--------------------------------------------\n"));
Object.assign(exports, require('../WAProto/index.js'));
Object.assign(exports, require('./Utils/index.js'));
Object.assign(exports, require('./Types/index.js'));
Object.assign(exports, require('./Defaults/index.js'));
Object.assign(exports, require('./WABinary/index.js'));
Object.assign(exports, require('./WAM/index.js'));
Object.assign(exports, require('./WAUSync/index.js'));
Object.assign(exports, require('./Store/index.js'));
exports.makeWASocket = makeWASocket;
module.exports = makeWASocket;
module.exports.default = makeWASocket;
Object.defineProperty(module.exports, '__esModule', { value: true });