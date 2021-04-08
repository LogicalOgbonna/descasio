const brain = (input = '') => {
    const value = input.split(" ");
    let tempAns = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "+") {
            if (tempAns) {
                tempAns += value[i + 1] ? parseFloat(value[i + 1], 10) : 0;
            } else {
                tempAns += (parseFloat(value[i - 1], 10) + parseFloat(value[i + 1], 10));
            }
        }
        if (value[i] === "-") {
            if (tempAns) {
                tempAns -= value[i + 1] ? parseFloat(value[i + 1], 10) : 0;
            } else {
                tempAns += ((value[i - 1] ? parseFloat(value[i - 1], 10) : 0) - (value[i + 1] ? parseFloat(value[i + 1], 10) : 0));
            }
        }
        if (value[i] === "*") {
            if (tempAns) {
                tempAns *= value[i + 1] ? parseFloat(value[i + 1], 10) : 1;
            } else {
                tempAns += ((value[i - 1] ? parseFloat(value[i - 1], 10) : 1) * (value[i + 1] ? parseFloat(value[i + 1], 10) : 1));
            }
        }
        if (value[i] === "÷" || value[i] === "/") {
            if (tempAns) {
                tempAns /= value[i + 1] ? parseFloat(value[i + 1], 10) : 1;
            } else {
                if (parseFloat(value[i + 1]) === 0) {
                    tempAns = 0 // return zero(0) instead of infinity when divided by zero
                    continue
                }
                tempAns += ((value[i - 1] ? parseFloat(value[i - 1], 10) : 1) / (value[i + 1] ? parseFloat(value[i + 1], 10) : 1));
            }
        }

    }
    return tempAns;
}

export default brain;