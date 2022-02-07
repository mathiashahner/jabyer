export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60
  
  let timeString = []
  
  if(hours > 0) {
    timeString = [hours, minutes, seconds]
  } else {
    timeString = [minutes, seconds]
  }

  return timeString.map(unit => String(unit).padStart(2, '0')).join(':')
}