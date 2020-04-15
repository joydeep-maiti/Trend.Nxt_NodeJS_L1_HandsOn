const currentDate = new Date();
const currentYear = currentDate.getFullYear()
const nextYear = currentYear+1;

const daysTillChristmas = () => {
    let christmas = new Date('25 Dec '+currentYear+' 00:00:00 GMT')
    if( currentDate > christmas) {
        christmas = new Date('25 Dec '+nextYear+' 00:00:00 GMT')
    }
    return (christmas - currentDate)/(24*60*60*1000);
}

const daysTillMothersday = () => {
    let mothersday = new Date('10 May '+currentYear+' 00:00:00 GMT')
    if( currentDate > mothersday) {
        mothersday = new Date('10 May '+nextYear+' 00:00:00 GMT')
    }
    return (mothersday - currentDate)/(24*60*60*1000);
}

const daysTillMyBday = () => {
    let bday = new Date('01 Jan '+currentYear+' 00:00:00 GMT')
    if( currentDate > bday) {
        bday = new Date('01 Jan '+nextYear+' 00:00:00 GMT')
    }
    return (bday - currentDate)/(24*60*60*1000);
}

exports.daysTillChristmas = daysTillChristmas
exports.daysTillMothersday = daysTillMothersday
exports.daysTillMyBday = daysTillMyBday
