import Exp from "../entities/Exp"

export function dateFromUsToRu(incomingStr: string | null) {
  let result = 'н/д'
  if (incomingStr) {
    let splits = incomingStr.split("-")
    result = `${splits[2]}.${splits[1]}.${splits[0]}`
  }
  return result
}
export function dateFromRutoUs(incomingStr: string) {
  let result
  let splits = incomingStr.split(".")
  result = `${splits[2]}-${splits[1]}-${splits[0]}`
  return result
}
export function dateAddReduceDays(incomingDate: string, countOfDays: number, plusMinus: boolean) {
  let date = new Date(incomingDate)

  if (plusMinus === true) {
    date.setDate(date.getDate() + countOfDays)
  } else {
    date.setDate(date.getDate() - countOfDays)
  }
  date.setHours(0)
  return dateFromRutoUs(date.toLocaleDateString())
}
export function dayGenerator(from: number, to: number) {
  return (from + Math.random() * (to - from));
}

export function loadExpsForAppDb(url: string){
  return fetch(url).then((data) => data.json()).then((data: []) => {
    const loadedData: Exp[] = []
    data.forEach((item) => {
      let newExp = new Exp()
      newExp.copyDataFromDbExp(item)
      loadedData.push(newExp)
    })
    return loadedData
  })
}

export function seveExpsFromAppDb(url: string, data: Exp[]) {
  const settings: RequestInit = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
  fetch(url, settings);
}