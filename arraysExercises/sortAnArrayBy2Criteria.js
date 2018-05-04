function sortAnArrayBy2Criteria(array) {
    array.sort((element1, element2) => sortByLength(element1, element2)).forEach(element => console.log(element));

    function sortByName(element1, element2) {
        return element1.toLowerCase().localeCompare(element2.toLowerCase());
    }

    function sortByLength(element1, element2) {
        return element1.length - element2.length || sortByName(element1, element2);
    }

}