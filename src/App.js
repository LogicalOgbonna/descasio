import { useEffect, useState } from 'react';
import './App.css';
import { ButtonRow, DisplayResult, Button } from './components';
import brain from './helpers/brain';
import keyPressed from './helpers/keyPressed';

function App() {

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);
  const [notworkingOperand, setNotworkingOperand] = useState('');

  useEffect(() => {

    const onKeyPress = ({ key }) => {
      keyPressed({ key, input, setInput, brain, setNotworkingOperand, setAnswer })
    }

    document.addEventListener('keydown', onKeyPress)
    return () => {
      document.removeEventListener('keydown', onKeyPress)
    }
  }, [input]);

  const onclickOperator = (val) => {
    if (!input.length && ["+", "*", "÷"].includes(val)) return // only allowing case like -1 and not +1 or *1 or /1 to start
    if (input[input.length - 2] === val) return // not allowing a case like ++ or --
    if (["+", "-", "*", "÷"].includes(input[input.length - 2])) return // not allowing as case like +- or *+
    setInput(input + " " + val + " ")
  }
  const onclickNumber = (val) => {
    setInput(input + val)
  }

  const onclickPoint = (val) => {
    if (input.indexOf(".") !== -1) return // not allowing double . in a number
    setInput(input + val)
  }


  const onPerformAction = (value) => {
    switch (value) {
      case "ans":
      case "ENTER": {
        if (!input.length) return
        const tempAns = brain(input)
        setAnswer(tempAns)
        setNotworkingOperand("")
        return;
      }
      case "del": {
        setInput(input.substring(0, input.length - 1));
        if (input.length <= 1) setAnswer(0)
        return;
      }
      case "AC": {
        setInput("");
        setAnswer(0)
        setNotworkingOperand("")
        return;
      }
      default:
        break;
    }
  }

  const notWorking = (value) => setNotworkingOperand(value)
  return (
    <div data-testid="calculator" className="container app-width">
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-sm-8  col-lg-6 calc-container">
          <DisplayResult input={input} answer={answer} />
          <ButtonRow>
            <Button onClick={notWorking}>(</Button>
            <Button onClick={notWorking}>)</Button>
            <Button onClick={onPerformAction}>ans</Button>
            <Button onClick={onPerformAction}>del</Button>
            <Button onClick={onPerformAction}>AC</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={onclickNumber}>7</Button>
            <Button onClick={onclickNumber}>8</Button>
            <Button onClick={onclickNumber}>9</Button>
            <Button onClick={notWorking}>%</Button>
            <Button onClick={notWorking}>&#8730;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={onclickNumber}>4</Button>
            <Button onClick={onclickNumber}>5</Button>
            <Button onClick={onclickNumber}>6</Button>
            <Button onClick={onclickOperator}>*</Button>
            <Button onClick={onclickOperator}>&#247;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={onclickNumber}>1</Button>
            <Button onClick={onclickNumber}>2</Button>
            <Button onClick={onclickNumber}>3</Button>
            <Button onClick={onclickOperator}>+</Button>
            <Button onClick={onclickOperator}>-</Button>
          </ButtonRow>
          <ButtonRow>
            <Button last onClick={onclickPoint}>.</Button>
            <Button last onClick={onclickNumber}>0</Button>
            <Button last onClick={onclickOperator}>&#177;</Button>
            <Button enter onClick={onPerformAction}>ENTER</Button>
          </ButtonRow>
          {notworkingOperand && <div className="not-working">{notworkingOperand} is not working at the moment</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
