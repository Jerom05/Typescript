const add = (a:number, b:number):number => {
  return a + b
}

const subtract = (a: number, b: number)=>{
  return a - b
}

function divide(a: number, b: number): number{
  return a / b
}

const multiply = function (a: number, b: number): number{
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const trhowError = (message: string): never => {
  throw new Error(message)
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }) => {
  console.log(forecast.date)
  console.log(forecast.weather)
}
logWeather(forecast  )

const person = {
  name: "Jerom",
  age: 27
}

// Object destructuring
const logPerson = ({name,age}: { name: string, age: number }) => {
  console.log(name)
  console.log(age)
}

logPerson(person)

// Object

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number):void {
    this.age = age
  }
}

const {coords:{lat,lng}}: {coords:{lat:number, lng:number}} = profile
