// findMatching function - returns all drivers that match the passed in name:
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name2){
    return drivers.filter(function (el){
        const itemsList = el.toLowerCase() === name2.toLowerCase();
    return itemsList;
    })
}

function fuzzyMatch(drivers, name3){
    return drivers.filter(function (element){
        return element.toLowerCase().indexOf(name3.toLowerCase()) === 0;
    })
}

function matchName(drivers, name4){
    return drivers.filter(function (filterMatch){
        return filterMatch["name"] === name4;
    } )

}