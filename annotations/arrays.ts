const carsMakers = ["ford", "toyota", "chevy"]
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// Help with inference when extracting values
const car = carsMakers[0] 
const myCar = carsMakers.pop()

// Prevent incompatible values
carsMakers.push(100) // give us type error
carsMakers.push("mini")

// Help with map
carsMakers.map((car:string):string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = []
importantDates.push(new Date())
importantDates.push('11-12-13')





