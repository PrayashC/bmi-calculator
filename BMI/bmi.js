
function bmi(){
    let age = document.bmiForm.age.value;
    let height = document.bmiForm.height.value;
    let weight = document.bmiForm.weight.value;
    let final = document.getElementsByClassName("finResult");
    let height_in_m = height/100;
    let bmi = Math.round((weight/(height_in_m*height_in_m)*100))/100;
    if(age == null || age == "" || age == "NaN"){
        alert("Enter Valid Age!");
        return false;
    }else if(height == null || height == ""){
        alert("Height is needed for bmi!");
        return false;
    }else if(weight == null || weight == ""){
        alert("weight is needed for bmi!");
        return false;
    }else{
        final[0].innerHTML=("<div>"+"BMI: "+bmi+"</div>"+"<div>"+bmiresult(bmi)+"</div>");
        final[0].classList.add("finResultBold");
        return false;
    }
}
function bmiresult(bmi){
    let outer = document.getElementsByClassName('outer');
    if(bmi < 18.5){
        outer[0].classList.remove("healthy","overweight","obese");
        outer[0].classList.add("underweight");
        return " Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        outer[0].classList.remove("underweight","overweight","obese");
        outer[0].classList.add("healthy");
        return " Healthy";
    }else if(bmi >= 25.0 && bmi <= 29.9){
        outer[0].classList.remove("healthy","underweight","obese");
        outer[0].classList.add("overweight");
        return " Overweight";
    }else{
        outer[0].classList.remove("healthy","overweight","underweight");
        outer[0].classList.add("obese");
        return " Officially Obese";
    }
}

let b = document.getElementsByClassName('cbtn');
function onclickfun(){
    b[0].classList.add("btn");
}
function offclick(){
    b[0].classList.remove("btn");
}
function active(){
    b[1].classList.add("btn");
}
function inactive(){
    b[1].classList.remove("btn");
}

function autoAgeSet(){
    let bday = document.bmiForm.bday.value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var start = Date.parse(bday);
    var end = Date.parse(today);
    var diff = (end - start) / (1000 * 60 * 60 * 24 * 31 * 12);
    ager = Math.round(diff);
    console.log(ager);
    document.bmiForm.age.value=ager;
}

    