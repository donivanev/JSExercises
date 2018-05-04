function filterByAge(minAge, name1, age1, name2, age2) {
    let firstObj = {name: name1, age: age1};
    let secondObj = {name: name2, age: age2};
    if(firstObj.age >= minAge){
        console.log(firstObj);
    }
    if(secondObj.age >= minAge){
        console.log(secondObj);
    }
}