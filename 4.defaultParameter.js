let printMessage=(username='john doe ',age=20,message='Congrats! ')=>{
    console.log('Hello ' + username + message + age);
}
printMessage();
printMessage("Kishan Kumar Saini ",23,"Now you are of ")

function fun(a=1,b=2){
    console.log(a+b);
}
fun()