export const combineDateAndTime = (date: Date, time: Date) => {
    const hours = time.getHours()
    const minutes = time.getMinutes()

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    return new Date(year, month, day, hours, minutes)
}