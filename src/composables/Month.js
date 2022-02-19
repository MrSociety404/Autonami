class Month {
  /**
   * @param {Number} month - (Real) month number
   * @param {Number} year - Year
   */
  constructor (month, year) {
    this.name = this.setName(month)
    this.days = this.setDays(month, year)
    this.year = year
  }

  /**
   * @param {Number} month - (Real) month number
   * @returns {String} - Month as a string in french
   */
  setName(month) {
    switch (month) {
      case 1:
        return 'janvier'
      case 2:
        return 'février'
      case 3:
        return 'mars'
      case 4:
        return 'avril'
      case 5:
        return 'mai'
      case 6:
        return 'juin'
      case 7:
        return 'juillet'
      case 8:
        return 'août'
      case 9:
        return 'septembre'
      case 10:
        return 'octobre'
      case 11:
        return 'novembre'
      case 12:
        return 'décembre'
        
    }
  }

  /**
   * @param {Number} day - Day number
   * @param {Number} month - (Real) month number
   * @param {Number} year - Year
   * @returns {string} - Weekday as a string in french
   */
  getWeekday(day, month, year) {
    const weekday = new Date(year, month - 1, day).getDay()
    switch (weekday) {
      case 1:
        return 'lundi'
      case 2:
        return 'mardi'
      case 3:
        return 'mercredi'
      case 4:
        return 'jeudi'
      case 5:
        return 'vendredi'
      case 6:
        return 'samedi'
      case 0:
        return 'dimanche'
    }
  }

  /**
   * @param {Number} month - (Real) month number
   * @param {Number} year - Year
   * @returns {Array} - Array with date objects for each day of the month
   */
  setDays(month, year) {
    const lastDateOfMonth = new Date(year, month, -0).getDate()
    const allMonthDays = []
    for (let i = lastDateOfMonth; i >= 1; i--) {
      allMonthDays.unshift(
        {
          weekday: this.getWeekday(i, month, year),
          date: i,
          events: []
        }
      )
    }
    return allMonthDays
  }
}

// TEST (if you want to check):
// const month = new Month(2, 2022)
// console.log(month.name)
// console.log(month.days)

export default Month
