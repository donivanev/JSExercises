function distOverTime(input) {
    let firstObjectDistance = input[0] * (input[2] / 3600) * 1000;
    let secondObjectDistance = input[1] * (input[2] / 3600) * 1000;

    let delta = Math.abs(firstObjectDistance - secondObjectDistance);

    console.log(delta);
}