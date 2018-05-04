function employeeData(array) {

    //let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9-\s]+)$/;

    //for(let i = 0; i < array.length; i++)
    //{
        //if(pattern.test(array[i]) === true){
         //   let tokens = array[i].split(' - ');
         //   console.log(`Name: ${tokens[0]}`);
          //  console.log(`Position: ${tokens[2]}`);
         //   console.log(`Salary: ${tokens[1]}`);
       // }
    //}

    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9- ]+)$/;

    for (let element of array) {
        let match = regex.exec(element);
        if (match) console.log(`Name: ${match[1]}\n` + `Position: ${match[3]}\n` + `Salary: ${match[2]} `);
    }
}

employeeData(["Jonathan - 2000 - Manager", "Peter- 1000- Chuck", "George - 1000 - Team Leader"]);