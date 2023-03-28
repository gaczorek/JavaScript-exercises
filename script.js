// const animals = ["cat", "lion", "shark", "fly"]
// animals.push("dog")
// animals.shift()
// animals.unshift("kitty", "cat", "giraffe")
// animals.pop()
// // ***************************
// const arrNumbers = [1, 2, 5, 8]
// function multiply (x){
//     return x*2
// }
// const newArrNumbers = arrNumbers.map(multiply)

// // map - podobne do pętli, wykonuje akcje na kazdym elemencie tablicy ZWRACA NOWA TABLICE
// const newArr = arrNumbers.concat(animals)

// // ***************************
// const drinks=["water", "cola", "juice"]
// const meals=["spaghetti", "pizza", "sandwich"]
// const menu = [...drinks, ...meals]
// // ***************************

// const numbersArr = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbersArr2 = numbersArr.slice(0, 2)

// const numbersArr3 = numbersArr.slice(-3)

// const randomStaff = colors.splice(3,2)

// const newCars = cars.splice(2, 4,"test")

// const ArrayNumbers =  [48, 23 , 85, 69, 44, 78, 21, 26]
// // function evenNumbers(x){
// //     return x % 2 === 0
// // }
// // console.log(numbers.filter(evenNumbers))
// numbersArr.forEach(number => console.log(number * 3))

// console.log(numbersArr.includes(24))
// console.log(numbersArr.indexOf(68))
// // indexOf zwraca -1 jesli tablica nie przechowuje takiego elementu!!!!

// const letters = ['c', 'd']
// letters.unshift('a', 'b')
// letters.push('e','f')
// console.log(letters)
// console.log(letters.includes('c'))
// // ***************************

// const numbers1 = [1,2,3,4]
// const food = ['pizza', 'spaghetti']
// // const newMenu = numbers.concat(food)
// const newMenu = [...food, ...numbers1]
// console.log(newMenu)

// // ***************************

// const numbers2 = [1,5,13,26,48]
// function multiply(x){
//     return x*5
// }
// const newNumbers = numbers2.map(multiply)
// console.log(newNumbers)

// for(const number of newNumbers) {
//     if(number%2===0)
//     console.log(` Liczba ${number} jest parzysta`)
//     else {
//         console.log(`Liczba ${number} jest nieparzysta`)
//     }
// }
// // ***************************

// const colorsArray = ['red']
// colorsArray.unshift('blue')
// colorsArray.push('green')
// let color ="pink"

// for(i=0; i<colors.length; i++) {
//     console.log(`My favourite color is ${colors[i].toUpperCase()}`)
// }

// for(const color of colors){
//     console.log(color.charAt(0).toUpperCase() + color.slice(1))
// }
// // ***************************

// const carsString = "audi, mercedes, bmw, nissan, dodge"
// const newCar = carsString.split(", ")
// console.log(newCar)
// newCars.length>3 ? console.log("jest ok") : console.log("nie jest ok")

// newCar.includes("audi") ? newCar.push("hyundai") : newCar.pop()

// console.log(newCar)

// // ***************************

// const numbers = [0.5, 4, "abc"]
// const names = ["lisa", 'lily', 'adam', 'przemek']

// numbers.forEach(num => console.log(num*num))

// const bigNames = names.map(name=> name.toUpperCase())
// console.log(bigNames)

// const showBigNames = name => {
//     console.log(name.toUpperCase())
// }
// names.forEach(showBigNames)
// // ***************************

// let score

// const add = (a, b)=> {
//   const score = a+b;
//   score%2===0 ? evenNum(score) : oddNum(score)
// }
// function evenNum(num) {
//   console.log(`Liczba ${num} jest parzysta`);
// }
// function oddNum(num) {
//   console.log(`Liczba ${num} jest nieparzysta`);
// }

// add(2,5)
// add(2,4)
// // ***************************

// let celsius
// let temp
// const farenheit = a => {
//     celsius = a
//     temp = celsius*1.8 + 32
//     console.log(`${celsius} C to ${temp} st farenheita`)
// }
// farenheit(20)
// // ***************************

// const num = 10
// const nums = []

// for(let i=0;i<num;i++){
//     nums.push(i)
// }
// console.log(nums)

// const division3 = x => {
//     if(x%3===0 && x!=0){console.log(`${x} jest podzielne przez 3`)}
//     else{console.log(`${x} nie jest podzielne przez 3 lub równa się 0`)}
// }
// numbers.forEach(division3)

// // ***************************

// const heading = document.querySelector('h1');
// heading.setAttribute('data-number', "2137")

// //***************************** */
// const middleChild = document.querySelector(".middle")

// const firstChild = middleChild.previousElementSibling
// const thirdChild = middleChild.nextElementSibling
// const parent = thirdChild.parentElement
// const closestGrandpa = firstChild.closest('.grandpa')

// const picture = document.querySelector('img');
// // picture.setAttribute('src', 'https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&quality=85&auto=format&fit=max&s=4219f64fafe19d101f92e0eba0181f6a');
// picture.setAttribute('alt', 'picture of cat')

// // saySomething =()=> console.log('say anything')
// // setTimeout(saySomething, 2000)

// //************************************ */

const list = document.querySelectorAll("li");
let i=0;
// list.forEach(item=> {
//   i++; 
//   item.textContent=i; 
//   item.dataset.id=i;
// })

for(const item of list) {
  i++; 
item.textContent=i; 
item.dataset.id=i;
}

const element = document.querySelector('[data-id="3"]')
const findWrapper = element.closest('.wrapper')
console.log(findWrapper)
