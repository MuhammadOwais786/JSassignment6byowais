/* ==========================================================================================
                              CHAPTER 21 - 25 ==> "STRING METHODS"
=============================================================================================*/



// Question (01)

var firstName = prompt("Enter Your First Name")
var lastName = prompt("Enter your Last Name")
var fullName = firstName + " " + lastName
alert("Your Full name is: ' " + fullName + " '")




// Question(02)

var mobile = prompt("Your Favorite Mobile Phone Model")
document.write("My Favorite phone is: " + mobile + "," + " length of sting: " + mobile.length)



// Question (03)

var pak = "Pakistani"
var letterIndex = pak.indexOf('n')
document.write("String: " + pak + "<BR> Index of 'n': " + letterIndex)



// Question (04)

var tex = "Hello world"
var letterIndex = tex.lastIndexOf('l')
document.write("String: " + tex + "<BR> Last Index of 'l': " + letterIndex)



// Question (05)

var pak1 = "Pakistani"
var character = pak1.charAt(3);
document.write("String: " + pak1 + "<BR> Charactor at Index of 'i': " + character)




// Question (06)

var firstName = prompt("enter first name")
var lastName = prompt("enter last name")
var fullName = firstName.concat(' ' + lastName)
alert("Your Full name is: ' " + fullName + " '")



// Question (07)

var city = "hyderabad"
var rep = city.replace('hyder', 'islam')
document.write("City: ", city, "<BR> After replacement: ", rep)



// QUestion (08)

var message = " “Ali and Sami are best friends. They play cricket and football together.” "
message.split("and").join("&")



// Question (09)

var word = "472"
document.write("Value: " + word + "<BR>" + "Type: " + typeof (word) + "<BR>" + "Value: ", word = +word, "<BR>" + "Type: " + typeof (word),)



// Question (10)

var input = "peanuts"
var uper = input.toUpperCase()
document.write("User input: ", input, "<BR>", "Upper case: ", uper)



// Quesiton (11)

var userInput = prompt("Enter your name")
var firstLetter = userInput[0].toUpperCase()
console.log(firstLetter + userInput.slice(1))



// Quesiton (12)

var number = prompt('Enter Dotted Number')
var result = number.replace('.', "")
document.write("Number: ", number, "<BR> Result: ", result)



// Question (13)

var name = prompt("Enter Your Name")
name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 1).charCodeAt() == 33 || name.slice(i, i + 1).charCodeAt() == 44 || name.slice(i, i + 1).charCodeAt() == 46 || name.slice(i, i + 1).charCodeAt() == 64) {
        check = true;
    } else {
        check = false;
    }
}

if (check == true) {
    alert("please enter a correct user name")
} else {
    name
}



// Question (14)

alert("Welcome To ABC Bakery")

var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome to ABC Bakery! What you want?")
var isFound = false 
inputCart = inputCart.toLocaleLowerCase()

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    document.write("We Are Sorry. " + inputCart + " Is Not Availabale")
}



// Question (15)

var pass = prompt("Enter Your Password");
var flag = 0
var count = 0
var ceck = +pass.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < pass.length; i++) {
        var cc = +pass.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == pass.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}



// Question (16)

var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    document.write(uni[i], "<BR>");
}



// Question (17)

var userinput = prompt();
var checkLastInput = userinput.slice(userinput.length - 1)

document.write("User input " + userinput + "<BR>" + "Last character of input: " + checkLastInput)




// Question (18)

var text1 = "The quick brown fox jumps over the lazy dog"
var flag = 0
var checker = "the "
var textcheck = text1.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checker.length) + i)

    if (checker == dd) {
        flag++
    }
}

document.write(text1 + "<BR> there are " + flag + " occurrence(s) of world 'the'")







/* ======================================================================================================
                                    CHAPTER 26 - 30 ==> "MATH METHODS"
=========================================================================================================*/



// Question (01)

var userInput = +prompt("Enter a Possitive Numbers")

document.write("Number: " + userInput + "<BR>")
document.write("floor value " + Math.round(userInput) + "<BR>")
document.write("floor value " + Math.floor(userInput) + "<BR>")
document.write("ceil value " + Math.ceil(userInput) + "<BR>")



// Question (02)

var userInput3 = +prompt("Enter a Negative floating numbers")

document.write("Number: " + userInput3 + "<BR>")
document.write("floor value " + Math.round(userInput3) + "<BR>")
document.write("floor value " + Math.floor(userInput3) + "<BR>")
document.write("ceil value " + Math.ceil(userInput3) + "<BR>")



// Question (03)

var userInput4 = +prompt("Enter a number for Absolute value")

document.write("The Absolute value of: " + userInput4 + " is " + Math.abs(userInput4))



// Question (04)

var diceValue = Math.floor(6 * Math.random() + 1)

document.write("Random dice value: " + diceValue)



// Question (05)

var coinValue = Math.floor(2 * Math.random() + 1)

if (coinValue === 2) {
    alert(coinValue + " Random coin value: Head")
} else if (coinValue === 1) {
    alert(coinValue + " Random coin value: Tail")
}



// Question (06)

var ran = Math.floor(100 * Math.random() + 1)

document.write("Random number between 1 and 100: " + ran)



// Question (07)

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("k")

console.log("the weight of user is " + weight[0] + " Kilograms")



// Question (08)

var secNum = Math.floor(Math.random() * 10)
var numInput = +prompt("Enter a number between 1 and 10")

if (numInput === secNum) {
    alert("Congratulations!")
} else {
    alert("Please try again")
}





/* =====================================================================================================
                                    CHAPTER 31 - 34 ==> "DATE METHODS"
=======================================================================================================*/




// Question (01)

document.write(new Date())



// Question (02)

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var curMonth = date.getMonth()

document.write("Current month: " + month[curMonth])



// Question (03)

var days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
var date = new Date()
var curday = date.getDay()

document.write("Today is : ==>" + days[curday] + " <BR>")

var three = days[curday] = days[curday].slice(0, 3)

document.write("today is in three words: ==> " + days[curday])



// Question (04)

var days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
var date = new Date()
var currday = date.getDay()

if (days[currday] === "sunday" || days[currday] === "sataurday") {
    alert("Hurray today is " + '"' + days[currday] + '"' + "It's fun day")
} else {
    alert("Today is " + '"' + days[currday] + '"' + " So please Go to work")
}



// Question (05)

var date = +prompt("Enter date")

if (date === 1 && date <= 15) {
    alert("First fifteen days of month")
} else if (date > 15 && date <= 31) {
    alert("Last fifteen days of month")
} else {
    alert("Please enter correct date")
}



// Question (06)

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var min = myDate.getFullYear() - oldDate.getFullYear();

document.write("Current Date: " + myDate + "<BR>")
document.write("Elapsed miliseconds since January 1,1970 : " + min * 365 * 24 * 60 * 60 + "<BR>")
document.write("Elapsed minutes since January 1,1970 : " + min * 365 * 24 * 60);



// Question (07)

var currTime = new Date()

currTime = currTime.getHours()
if (currTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}



// Question (08)

var laterDate = new Date("12/31/20")

document.write("Later Date: " + laterDate)



// Question (09)

var ramadanDay = new Date("June 18, 2015")
var nowDay = new Date()
var msRamadan = ramadanDay.getTime()
var msNowDay = nowDay.getTime()
var msDiff = msNowDay - msRamadan
var totalDiff = msDiff / (1000 * 60 * 60 * 24)
totalDiff = Math.floor(totalDiff)

document.write(totalDiff + " Days have passed since 1st Ramadan, 2015")




// Question (10)

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400

alert(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beinning of 2015"
)



// Question (11)

var checkTime = new Date();
var oneHour = new Date();
var oldHour = oneHour.setHours(oneHour.getHours() - 1);
var oldhund = new Date(oldHour)

document.write("Curent Date: " + checkTime + "<BR> 1 hour ago, it was " + oldhund)



//Question (12)

var oneYr = new Date();
var oldyear = oneYr.setYear(oneYr.getFullYear() - 100);
var oldhund = new Date(oldyear)

document.write("Curent Date: " + oneYr + "<BR> 100 Year back, it was " + oldhund)



// Question (13)

var currentYear = new Date()
var getUserdate = prompt("Enter you date of birth format like this ==> MM/d/yy")
var userDate = new Date(getUserdate)
var diff = currentYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365)
var bdYear = currentYear.getFullYear() - age

document.write("Your age is " + Math.floor(age) + "<BR>" + "Your birthday year is " + Math.floor(bdYear))



// Question (14)

// (a)

var name = "Muhammad Owais Ahmed";


// (b)

var date = new Date()
var month = date.getMonth()


// (c)

var unit = 410


// (d)

var chargesUnit = 16


// (e)

var netAmount = unit * chargesUnit


// (f)

var dueDateCharge = 500


// (g)

var grossAmount = netAmount + dueDateCharge

document.write("Customer Name " + name + "<BR>")
document.write("Month " + month + "<BR>")
document.write("Number of Units: " + unit + "<BR>")
document.write("Charges per init: " + chargesUnit + "<BR>")
document.write("Net Amount Payable(eithin Due Date): " + netAmount + "<BR>")
document.write("Late payment surcharge: " + dueDateCharge + "<BR>")
document.write("Gross Amount payable(after Due Date): " + grossAmount)




/* ====================================================================================================
                                   CHAPTER 35 - 38 ==> "FUNCTION"
======================================================================================================*/



// Question (01)

function date() {
    document.write(new Date())
}
date()



//Question (02)

function fullName(firstName, lastName) {
    console.log("Hello !" + firstName + " " + lastName)
}
fullName("Muhammad", "Owais")



//Question (03)

function sum(a, b) {
    console.log(a + b)
}
sum(2, 6)



//Question (04)

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}



//Question (05)

function square(num) {
    return num * num
}



//Question (06)

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)



//Question (07)

function counting() {
    var start = +prompt("Enter counting start number")
    var end = +prompt("Enter counting end number")
    for (var i = start; i <= end; i++) {
        document.write(i + "<BR>")
    }
}



//Question (08)

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



//Question (09)


function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)



//Question (10)

function reverseText(text) {
    alert(text.split('').reverse().join(''))
}

function isPalindrome(text) {
    var reverseText = ''

    for (var i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }
    console.log('reverseText--->', reverseText)

    if (reverseText === text) {
        alert(text + ' is Palindrome')
    } else {
        alert(text + ' is not Palindrome')
    }
}

isPalindrome('Madam')



//Question (11)

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))



//Question (12)

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));



// Quesition (13)

var count = 0
var letter = "JSResourceS.com"
for (var i = 0; i < letter.length; i++) {
    if (letter[i] == "o") {
        count = count + 1
    }
}
console.log(count)



//Question (14)

function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.floor(circle))
}
area(3)
