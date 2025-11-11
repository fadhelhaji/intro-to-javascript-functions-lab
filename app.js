//Exercise 1
function maxOfTwoNumbers(higher,lower){
    if(higher >= lower){
        return higher
    }
    else{
        return false
    }
}
console.log(maxOfTwoNumbers(10,9));


//Exercise 2
const isAdult = age => {
    if(age >= 18){
        return 'adult'
    }
    else{
        return 'not adult'
    }
}
console.log(isAdult(18))


//Exercise 3
const isCharVowel = vowels => {
    if( vowels === 'a'||
        vowels === 'e'||
        vowels === 'i'||
        vowels === 'o'||
        vowels === 'u'){
        return true
    }
    else{
        return false
    }
}
console.log(isCharVowel('o'))


//Exercise 4
const generateEmail = (name, domain) =>{
    return (name + domain)
}
console.log(generateEmail('fadhel','@hotmail.com'))


//Exercise 5
const greetUser = (time, name) =>{
    if(time === 'morning'){
        return 'Good morning! ' + name
    }
    else if(time === 'afternoon'){
        return 'Good afternoon! ' + name
    }
    else{
        return 'Good evening! ' + name
    }
}
console.log(greetUser('morning', 'Fadhel'))


//Exercise 6
const maxOfThree = (one, two, three) => {
    {
        return Math.max(one , two, three)
    }
}
console.log(maxOfThree('10', '6', '8'))


//Exercise 7
const calculateTip = (totalBill, tipPercentage) => {
    return (totalBill/100) * tipPercentage
}
console.log(calculateTip(50, 20))


//Exercise 8
const convertTemp = (Temp, Scale)=>{
    if(Scale === 'C'){
        return (Temp*9/5)+32
    }
    else if(Scale === 'F'){
    return(Temp-32)*5/9
    }
}
console.log(convertTemp(32, 'F'))


//Exercise 9
const basicCalculator = (num1, num2, operation) => {
    if(operation === 'subtract'){
        return(num1 - num2)
    }
    else if(operation === 'add'){
        return(num1 + num2)
    }
    else if(operation === 'multiply'){
        return(num1 * num2)
    }
    else{
        return(num1 / num2)
    }
}
console.log(basicCalculator(5, 10, 'subtract'))

