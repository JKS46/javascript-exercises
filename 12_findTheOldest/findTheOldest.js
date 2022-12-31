const findTheOldest = function(people) {
    let oldTimer = people
                        .sort((a,b)=>
                        {
                            if(a.yearOfDeath == undefined){
                                a.yearOfDeath = (new Date()).getFullYear();
                            }
                            if(b.yearOfDeath == undefined){
                                b.yearOfDeath = (new Date()).getFullYear();
                            }
                            if((a.yearOfDeath - a.yearOfBirth)>(b.yearOfDeath - b.yearOfBirth)){
                                return -1
                            }
                            return 1
                        })
    console.log(oldTimer[0]);
    return people[people.indexOf(oldTimer[0])];
};

// Do not edit below this line
module.exports = findTheOldest;
