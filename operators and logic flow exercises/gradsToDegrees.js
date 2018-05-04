function gradsToDegrees(grad) {
    let result = grad * 0.9;

    if(result >= 0 && result <= 360){
        if(result === 360)
        {
            console.log(0);
        } else{
            console.log(result);
        }
    } else if(result < 0) {
        console.log(360 - Math.abs(result));
    } else if(result > 360) {
        let helpNum = Math.floor(result / 360);
        console.log(result - helpNum * 360);
    }

        // grads = Number(grads);
        // let degrees = grads * 3.6 / 4;
        // degrees = degrees % 360;
        //
        // if(degrees < 0) {
        //     degrees = 360 + degrees;
        // }
        //
        // console.log(degrees);
}

gradsToDegrees(567);