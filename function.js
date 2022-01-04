
/**
 * for age cal
 * @param {*} name 
 * @param {*} year 
 */
function ageCal(name,year){

    let date = new Date();
    // to find age
    let age = date.getFullYear() - year;
    // store status function in var
    let stat = ageStatus(age);

    output.innerHTML = `<p class="alert alert-${stat.color}">HI! ${name}, you are ${age} year old & ${stat.name}</p>`
}


// to find age status and bg color
function ageStatus(age){

    if(age > 0 && age <= 10){
        return{
            name  : 'tumi bacca',
            color : 'muted'
        }
    }else if(age > 10 && age <= 18){
        return{
            name  : 'tumi kishore',
            color : 'info'
        }
    }else if(age > 18 && age <= 35){
        return{
            name  : 'Apni jubok',
            color : 'success'
        }
    }else if(age > 35 && age <= 50){
        return{
            name  : 'Apner bardokko start hoise',
            color : 'primary'
        }
    }else if(age > 50 && age < 75){
        return{
            name  : 'Apni mid level bura',
            color : 'warning'
        }
    }else if(age > 10 && age < 18){
        return{
            name  : 'Apni high level bura',
            color : 'danger'
        }
    }else if(age > 100){
        return{
            name  : 'Apni jin',
            color : 'dark'
        }
    }
}