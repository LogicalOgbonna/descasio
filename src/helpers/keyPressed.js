const keyPressed = ({ key, input, setInput, brain, setNotworkingOperand, setAnswer }) => {
    // console.log("🚀 ~ file: keyPressed.js ~ line 18 ~ keyPressed ~ key", key)
    if (["+", "-", "*", "÷", "/"].includes(key)) {
        if (key === "/") return setInput(`${input} ÷ `)
        setInput(`${input} ${key} `)
    }
    if (['Enter', '='].includes(key)) {
        const tempAns = brain(input);
        setNotworkingOperand("")
        setAnswer(tempAns);
    }
    if (key === "." && input.indexOf(".") === -1) setInput(input + key)
    if (key === "Backspace") {
        setInput(input.substring(0, input.length - 1));
        if (input.length <= 1) setAnswer(0)
    }
    if (isNaN(key)) return;
    setInput(input + key);
}

export default keyPressed;