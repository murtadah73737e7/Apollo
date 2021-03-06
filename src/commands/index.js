// General Commands
module.exports.help = require('./general/help');
module.exports.members = require('./general/members');
module.exports.report = require('./general/report');
// Custom Command Commands
module.exports.addcommand = require('./custom-commands/addcommand');
module.exports.delcommand = require('./custom-commands/delcommand');
module.exports.editcommand = require('./custom-commands/editcommand');
// Dynamic Channel Commands
module.exports.adddynamic = require('./dynamic-channels/adddynamic');
module.exports.deldynamic = require('./dynamic-channels/deldynamic');
module.exports.lock = require('./dynamic-channels/lock');
module.exports.unlock = require('./dynamic-channels/unlock');
// Moderation Commands
module.exports.ban = require('./moderation/ban');
module.exports.clear = require('./moderation/clear');
module.exports.clearuser = require('./moderation/clearuser');
module.exports.kick = require('./moderation/kick');
module.exports.mute = require('./moderation/mute');
