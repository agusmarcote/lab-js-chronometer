class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here

     this.intervalId = setInterval(() => {
      console.log(this.currentTime)
      this.currentTime++

      if (printTimeCallback){
        return printTimeCallback()
      }     
    }, 1000)
    
  }


  getMinutes() {
    // ... your code goes here
    let a = Math.floor(this.currentTime / 60)
    console.log(a)
    return a
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value < 10){
      
      return `0${value}`
    }
    
    return `${value}`

  }

  stop() {
    // ... your code goes here

   clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here

    this.currentTime = 0

  }

  split() {
    // ... your code goes here

    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
  }
}

const chronometer1 = new Chronometer();
//start()
//console.log(chronometer1.start)
//start(printTimeCallback)
chronometer1.start()

setInterval(()=>{
  chronometer1.getMinutes()
}, 60000)
