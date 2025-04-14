// determines the hours of sleep each nite for the week
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
        //  returns an error if an invalid day is provided
    } else {
        return 'error';
    }
}
// console.log(getSleepHours('wednesday'))
// added sleep hours for each day of the week
// represents total sleep hours for the week
const getActualSleepHours = () =>
8 + 7 + 6 + 5 + 6 + 7 + 20
    // getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


// get the ideal amount of sleep each week
const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
};
// handles the sleep debt information 
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    console.log('actual sleep hours - ', actualSleepHours);
    const idealSleepHours = getIdealSleepHours(7)
    console.log('ideal sleep hours - ', idealSleepHours);
    

    // console.log('getIdealSleepHours - ', getIdealSleepHours(5));
    // determines users sleep criteria by comparing the ideal sleep and actual sleep the user experienced
    if (actualSleepHours === idealSleepHours) {
        console.log('perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You need ${actualSleepHours - idealSleepHours} hours less sleep`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You need ${idealSleepHours - actualSleepHours} hours more sleep`);
    } else {
        console.log('error');

    };
};
calculateSleepDebt()


    
