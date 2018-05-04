function roadRadar(array) {

    if(array[1] === 'city'){
        citySpeedCheck(array[0]);
    } else if(array[1] === 'residential'){
        residentialSpeedCheck(array[0]);
    } else if(array[1] === 'interstate'){
        interstateSpeedCheck(array[0]);
    } else if(array[1] === 'motorway'){
        motorwaySpeedCheck(array[0]);
    }

    function citySpeedCheck(speed) {
        if(speed <= 50){
            console.log('');
        } else {
            if(speed > 50 && speed <= 70){
                console.log('speeding');
            } else if(speed > 70 && speed <= 90){
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    }
    function residentialSpeedCheck(speed) {
        if(speed <= 20){
            console.log('');
        } else {
            if(speed > 20 && speed <= 40){
                console.log('speeding');
            } else if(speed > 40 && speed <= 60){
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    }
    function interstateSpeedCheck(speed) {
        if(speed <= 90){
            console.log('');
        } else {
            if(speed > 90 && speed <= 110){
                console.log('speeding');
            } else if(speed > 110 && speed <= 130){
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    }
    function motorwaySpeedCheck(speed) {
        if(speed <= 130){
            console.log('');
        } else {
            if(speed > 130 && speed <= 150){
                console.log('speeding');
            } else if(speed > 150 && speed <= 170){
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    }
}
