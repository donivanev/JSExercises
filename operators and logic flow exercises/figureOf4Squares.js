function squareFigure(number) {

    let n = Number(number);

    if(n !== 2){
        console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');

        for(let i = 0; i < n/2 - 2; i++){
            console.log('|' + " ".repeat(n - 2) + '|' + " ".repeat(n - 2) + '|');
        }

        console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');

        for(let i = 0; i < n/2 - 2; i++){
            console.log('|' + " ".repeat(n - 2) + '|' + " ".repeat(n - 2) + '|');
        }

        console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');
    }
    else{
        console.log('+' + '+' +'+');
    }
}

squareFigure(5);