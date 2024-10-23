// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function(){
    return ["Antonia", "Nuru"];
}
const returnLastTwoDrivers = function() {
    return ["Amari", "Mo"];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(multiplier) {
        return function(fare) {
            return multiplier*fare
        }

}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers (arrayOfDrivers, selectionfunction) {
    return selectionfunction(drivers);
}
