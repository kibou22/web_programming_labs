//Function to estimate time to finish the route//
const estimateMinutes = km => Math.round(km / 15 * 60)
const routes = [
    { name: "Regent's Canal Cycle Route", distance: 5.5 },
    { name: "Capital Ring", distance: 7 },
    { name: "Lee Valley Regional Park Route", distance: 3 },
    { name: "Thames Cultural Cycling Tour", distance: 27 },
    { name: "Thames Path Cycleway", distance: 6 },
    { name: "Richmond Park Loop", distance: 15 },

]
let total_distance = 0;
for (let route of routes) {
    total_distance += route.distance;
    //Classify dificalcy//
    if (route.distance > 10) {
        route.level = 'hard';
    } else if (route.distance > 5) {
        route.level = 'medium';
    } else {
        route.level = 'easy';
    }
route.estimatedMinutes=estimateMinutes(route.distance)

}
console.log("total distance", total_distance)
console.log(routes);



