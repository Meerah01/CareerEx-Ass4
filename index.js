//Question 1
function utmeScore( score = 180 ){
    if (score >= 180 ){ console.log("PASSED")} 
    else { console.log("FAILED") }
}
utmeScore()
utmeScore(140)
utmeScore(250)


//Question 2
function age( age = 18 ){
    if (age >= 18 ){ console.log("You're eligible to vote.")} 
    else { console.log("Not eligible.") }
}
age()
age(10)
age(25)


//Question 3
function person( name = "Princess", score = 0 ){
    if (score >= 90 ){ console.log( `${name}: Grade is EXCELLENT `)} 
    else if (score >= 75 ) { console.log( `${name}: Grade is GOOD `) }
    else if (score >= 50 ) { console.log( `${name}: Grade is AVERAGE `) }
    else { console.log( `${name}: Grade is FAIL `) }
}
person()
person( "Aisha", 90)
person( "Patrick", 76)
person( "Silver", 55)


//Question 4
function booleanValues(hasID = true, isAbove18 = true){
    if ( hasID == true && isAbove18 == true )
        { console.log("Access Granted") }
    else { console.log("Access Denied") }
}
booleanValues()
booleanValues(true, false)


//Question 5
const studentScore = [20, 40, 60, 80, 100]
for ( let s=0; s < studentScore.length; s++){ 
    console.log(studentScore[s])
    if ( studentScore[s] > 50 ) { console.log("PASSED") }
    else { console.log("FAILED") } 
}


//Question 6
const a = ( mathScore = 0, englishScore = 0 )=>{
    if ( mathScore >= 50 && englishScore >= 50 ){ console.log("YES") }
    else { console.log("NO") }
}
a()
a(50, 50)
a(70, 80)
a(80, 45)
a(30, 65)


//Question 7
function signUp (email = false, phoneNumber = false){
    if ( email == true || phoneNumber == true ) { console.log("Proceed to sign up.") }
    else { console.log("No email or phone number found.") }
}
signUp()
signUp(false, true)
signUp(true, true)


//Question 8
function userDetails ( userName = "Bolu", password = "67!" ){
    if ( userName == ""  || password == "" ) { console.log("INVALID INPUT!") }
    else { console.log(`Name: ${userName}, Password: ${password}`) } 
}
userDetails()
userDetails( "Rita", "Rita03!" )
userDetails( "John", )
userDetails( "", "89Wefh" )
userDetails( "Mercy", "" )



//Question 9
const hoursWorked = 40
let hW
hoursWorked >=40 ? hW = "Full-time" : hW = "Part-time"
console.log(hW)



//Question 10
const numbers = ( a = 12, b = 20 )=>{
    if ( b>a ) { console.log(b) }
    else { console.log(a) }
}
numbers()
numbers(27, 4)
numbers(31, 87)
