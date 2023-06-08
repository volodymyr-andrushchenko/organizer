function getDatesAroundProvidedDate(providedDate: Date): Date[] {
  const tenDaysBefore = []
  for (let i = 1; i <= 10; i++) {
    const date = new Date(providedDate.getTime() - i * 24 * 60 * 60 * 1000)
    tenDaysBefore.push(date)
  }

  const thirtyOneDaysAfter = []
  for (let i = 1; i <= 31; i++) {
    const date = new Date(providedDate.getTime() + i * 24 * 60 * 60 * 1000)
    thirtyOneDaysAfter.push(date)
  }

  return [...tenDaysBefore.reverse(), providedDate, ...thirtyOneDaysAfter]
}

function breakArrayIntoChunksOfSeven<T>(array: T[]) {
  const subarrays = []
  for (let i = 0; i < array.length; i += 7) {
    subarrays.push(array.slice(i, i + 7))
  }
  return subarrays
}

export function getDatesToDisplay(dateInCenter: Date) {
  return breakArrayIntoChunksOfSeven(getDatesAroundProvidedDate(dateInCenter))
}
