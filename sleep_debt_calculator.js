const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 4;
    } else if (day === 'saturday') {
        return 3;
    } else if (day === 'sunday') {
        return 2;
    } else {
        return "That is not a day!";
    }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log("You have a perfect amount of sleep.")
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got more sleep than needed. You have overslept: " + (actualSleepHours - idealSleepHours) + "hours.");
    } else {
        console.log("You need to sleep more! You need to get: " + (idealSleepHours - actualSleepHours) + " hours more!");
    }
};

calculateSleepDebt();