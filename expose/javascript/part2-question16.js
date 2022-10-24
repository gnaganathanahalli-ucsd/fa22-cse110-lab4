let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(variable in statistics){
    if((Array.from(variable)[0] == 'r') || (statistics[variable] % 2 != 0) ){
        console.log(statistics[variable])
    }
}