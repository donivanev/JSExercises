function moviePrices(args) {

    let price = 0;
    let title = args[0].toLowerCase();
    let day = args[1].toLowerCase();

    if(title === "the godfather"){
        switch(day){
            case 'monday': price = 12; break;
            case 'tuesday': price = 10; break;
            case 'wednesday': price = 15; break;
            case 'thursday': price = 12.50; break;
            case 'friday': price = 15; break;
            case 'saturday': price = 25; break;
            case 'sunday': price = 30; break;
            default: console.log('error'); break;
        }
    } else if(title === "schindler's list"){
        switch(day){
            case 'monday': price = 8.50; break;
            case 'tuesday': price = 8.50; break;
            case 'wednesday': price = 8.50; break;
            case 'thursday': price = 8.50; break;
            case 'friday': price = 8.50; break;
            case 'saturday': price = 15; break;
            case 'sunday': price = 15; break;
            default: console.log('error'); break;
        }
    } else if(title === "casablanca"){
        switch(day){
            case 'monday': price = 8; break;
            case 'tuesday': price = 8; break;
            case 'wednesday': price = 8; break;
            case 'thursday': price = 8; break;
            case 'friday': price = 8; break;
            case 'saturday': price = 10; break;
            case 'sunday': price = 10; break;
            default: console.log('error'); break;
        }
    } else if(title === "the wizard of oz"){
        switch(day){
            case 'monday': price = 10; break;
            case 'tuesday': price = 10; break;
            case 'wednesday': price = 10; break;
            case 'thursday': price = 10; break;
            case 'friday': price = 10; break;
            case 'saturday': price = 15; break;
            case 'sunday': price = 15; break;
            default: console.log('error'); break;
        }
    }

    console.log(price);
}