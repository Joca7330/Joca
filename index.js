// hours of sleep each nite for the week
const getSleepHours = day => {
    // accepts a day as param/arg and returns the number of hours slept that nite
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 7;
    } else if (day === 'sunday') {
        return 6;
    } else {
        return 'error';
    }
};
// console.log(getSleepHours('wednesday'))
// added sleep hours for each day of the week
// represents total sleep hours for last week
const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


// console.log(getActualSleepHours());
// get the number of hours of sleep you want each week
const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
};
// console.log(getIdealSleepHours());
// 
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    // determines users sleep criteria by comparing the ideal sleep and actual sleep the user experienced
    if (actualSleepHours === idealSleepHours) {
        console.log('perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('more sleep than needed');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('get more sleep');
    } else {
        console.log('error');

    };
};



