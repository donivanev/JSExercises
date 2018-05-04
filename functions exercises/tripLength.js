function tripLength(array) {

    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let x2 = Number(array[2]);
    let y2 = Number(array[3]);
    let x3 = Number(array[4]);
    let y3 = Number(array[5]);

    let distance1and2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let distance2and3 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
    let distance1and3 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);

    if ((distance1and2 <= distance1and3) && (distance1and3 >= distance2and3)) {
        let a = distance1and2 + distance2and3;
        console.log('1->2->3: ' + a);
    }
    else if ((distance1and2 <= distance2and3) && (distance1and3 < distance2and3)) {
        let b = distance1and3 + distance1and2;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance2and3 + distance1and3;
        console.log('1->3->2: ' + c);
    }
}