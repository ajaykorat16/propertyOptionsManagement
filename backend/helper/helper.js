const momentTimezone = require('moment-timezone')
const moment = require('moment')

const parseIndianDate = (date, input = 'ddd MMM DD YYYY HH:mm:ss Z+HHmm', format = 'YYYY-MM-DD') => {
    const utcDateTime = momentTimezone(date, input).tz('UTC');
    const indianDateTime = utcDateTime.clone().tz('Asia/Kolkata');
    return indianDateTime.format(format);
};

const formattedDate = (date) => {
    return moment(date).format('DD-MM-YYYY')
}

const parsedDate = (date, format = 'YYYY-MM-DD') => {
    const indianDateTime = momentTimezone(date, 'YYYY-MM-DD').tz('Asia/Kolkata');
    return indianDateTime.format(format);
};

function capitalizeFLetter(string) {
    if (typeof string !== 'undefined') {
        return string[0].toUpperCase() + string.slice(1);
    } else {
        return "-"
    }
}

module.exports = { formattedDate, capitalizeFLetter, parsedDate, parseIndianDate }
