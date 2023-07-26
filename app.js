console.log('Assignment 1: Array Operations') 

let fruits = []                             //empty array fruits

fruits = [ "apple", "banana", "orange"]     // "apple", "banana", "orange".
console.log(fruits)

fruits.splice(0,1)                          //Remove the first fruit from the array.
console.log(fruits)

fruits.push('grape')                        //Add "grape" to the end of the array
console.log(fruits)

fruits.splice(1,0,'pear')                   //Update the second fruit in the array to "pear"
console.log(fruits)

console.log('Assignment 2: Object Operations') 

let person = {}                             //empty object person
//properties like name , age and city are added to person object

person = {
    name: 'John',
    age: 30,
    city: 'New York' 
}

console.log(person) 
console.log(person.name, person.age, person.city)

// Remove the "age" property from the "person" object.
delete person.age                       
console.log(person) 
console.log(person.age) 

// Add a new property called "job" with the value "Engineer" to the "person" object.

person.job = 'Engineer'
console.log(person) 
console.log(person.job) 

// Update the "city" property of the "person" object to "San Francisco".
person.city = 'San Francisco'
console.log(person.city) 
// Print the final "person" object after performing the above operations.
console.log(person) 

console.log('Assignment 3: Array of Objects Operations') 

let cars = []                           // Create an empty array called "cars".
cars = {
    make: 'Toyota',
    model: 'Camry',
    year: 2018
}
console.log(cars)

delete cars.make
console.log(cars)

// cars.make = cars.splice(0,0,'Honda')
cars.make = 'Honda'
cars.model = 'Civic'
cars.year = 2020

console.log(cars)

cars.model = 'Accord'

console.log(cars)









