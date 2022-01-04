// select element
const year = document.querySelector('.year');
const name = document.querySelector('.name');
const submit = document.querySelector('.submit');
const output = document.querySelector('.card-footer');

let namePattern = /^[a-z]*$/i;



// field validation
name.addEventListener('keyup',function(){

    if(name.value == ''){
        name.nextElementSibling.innerHTML = `<P class="text-danger">Please input value</p>`
    }else if(namePattern.test(name.value) == false){
        name.nextElementSibling.innerHTML = `<P class="text-warning">Only character allow</p>`
    }else if(namePattern.test(name.value) == true){
        name.nextElementSibling.innerHTML = `<P class="text-success">correct</p>`
    }
})




// click event
submit.addEventListener('click', function(){

ageCal(name.value, year.value);
    year.value = ''
    name.value = '';
    
})




