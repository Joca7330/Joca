// The scope of `random` is too loose 

// Randomly selects 1 of 3 training events
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
// Tracks how many training days are needed
  const getTrainingDays = event => {
  let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
// Stores athlete's name
  const name = 'Nala';
  // The scope of `name` is too tight 
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  // Logs the required training days for the athlete
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  // Generates a random event for the first athlete
  const event = getRandEvent();
  // Calculates training days based on the event
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  // Logs the first athletes event and training time
  logEvent(name, event);
  logTime(name, days);
  // Generates a random event for the 2nd athlete
  const event2 = getRandEvent();
  // Calculates training days for the 2nd athlete
  const days2 = getTrainingDays(event2);
  // Defines the 2nd athlete's name
  const name2 = 'Warren';
  // Logs the 2nd athlete's event and training time
  logEvent(name2, event2);
  logTime(name2, days2);
  
  
  