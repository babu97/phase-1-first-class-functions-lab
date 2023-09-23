// Code your solution in this file!
const returnFirstTwoDrivers = (arr)=>arr.slice(0,2)

const drivers = ["Driver1", "Driver2", "Driver3", "Driver4"]

console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = (arr)=>arr.slice(-2)
console.log(returnLastTwoDrivers(drivers))


const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers)

const createFareMultiplier =(multiplier) => (fare)=> fare*multiplier;

console.log (createFareMultiplier(4))

const fareDoubler = createFareMultiplier(2);

const fareTripler= createFareMultiplier(3);


function selectDifferentDrivers(drivers, driveFunction){
return driveFunction(drivers)

}

console.log(createFareMultiplier(4)(6))

console.log (fareDoubler)
