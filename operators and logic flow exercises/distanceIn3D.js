function distIn3D(coordinates) {

    let distance = Math.sqrt((coordinates[3] - coordinates[0]) ** 2 +
        (coordinates[4] - coordinates[1]) ** 2 + (coordinates[5] - coordinates[2]) ** 2);

    console.log(distance);
}