var a = prompt("write number or alphabet ")
.charCodeat()  //it tells the decimal number of capital letter , number , lower letter 

var b = "c"
var user = b.charCodeAt()
console.log(user)


var a = prompt("Enter any num , string")
var input = a.charCodeAt()
if(input >= 97 && input <= 122)
{
    alert("you typed lower letter" )
}
else if (input >= 65 && input <= 90){
    alert("you typed capital letter")
}
else if (input >= 48 && input <= 59 ){
    alert("yoy typed number")

}
// else if for special characters
else{
    alert("Invalid character! please type only number , string")
}