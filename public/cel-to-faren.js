function celToFar(temp){
    return temp*(9/5) + (32)
}

function farToCel(temp){
    return (temp - 32)*(5/9)
}

function convTemp(type, temp) {
    if (type.toLowerCase() == 'c'){
        return celToFar(temp)
    } else if (type.toLowerCase() == 'f'){
        return farToCel(temp)
    } else {
        return "Invalid type"
    }
}

console.log(convTemp('f', 752))