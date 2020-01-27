export const mostDangerous = (array) => {

    return array.reduce((accumulator, element) => {
       if (element.dangerLevel < accumulator.dangerLevel){
        return accumulator;
       }
       else {
        return element
       }
   },"").name
}

export const leastDangerous = (Array) => {
    return Array.reduce((accumulator, element) => {
        if (element.dangerLevel > accumulator.dangerLevel){
         return accumulator;
        }
        else {
         return element
        }
    }).name
}   

export const typeAndDangerLevelMostDanger = (Array) => {
    let mostDangerAnimal = Array.reduce((accumulator, element) => {
        if (element.dangerLevel < accumulator.dangerLevel){
         return accumulator;
        }
        else {
         return element
        }
    })
    const {type, dangerLevel } = mostDangerAnimal;
    return { type, dangerLevel }
}

export const pickWinner = (petArray, num1, num2) => {
    return petArray[num1].dangerLevel > petArray[num2].dangerLevel ? petArray[num1] : petArray[num2]
 }

 export const pickWinnerNames = (Array, name1, name2) => {
    const contestants = Array.filter((element) => {
        if(element.name == name1 || element.name == name2)
        return true
    })
    return pickWinner(contestants,0,1);
}

export const typeCount = (petArray) =>{
    return petArray.reduce((acc, pet) => {
        const {type} = pet
        const accHasThisType = acc[type]
        return accHasThisType ? {...acc, [type]: acc[type] + 1} : {...acc, [type]: 1}
    }, {})
}

export const alphabetizeName = (Array) => {
    const nameList = Array.map((element) => {
        return element.name
    })
    return nameList.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
}

export const doubleDangerNameKeys = (petArray) => {
    return petArray.reduce((accumulator, element) => {
        const {name, dangerLevel} = element;
        const newDangerLevel = dangerLevel*2;
        const newElement = {...element, dangerLevel: newDangerLevel};
        return { ...accumulator, [name]: newElement };
    },{})
}