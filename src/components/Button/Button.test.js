import { render, fireEvent } from '@testing-library/react';

import Button from "./Button";

describe('Render <Button /> without crashing', () => {
    const onClick = (value) => value;
    it('renders <Button /> 1', () => {
        const { getByTestId } = render(<Button onClick={onClick}>1</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("1");
        fireEvent.click(button)
    })
    it('renders <Button /> 2', () => {
        const { getByTestId } = render(<Button onClick={onClick}>2</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("2")
    })
    it('renders <Button /> 3', () => {
        const { getByTestId } = render(<Button onClick={onClick}>3</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("3")
    })
    it('renders <Button /> 4', () => {
        const { getByTestId } = render(<Button onClick={onClick}>4</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("4")
    })
    it('renders <Button /> +', () => {
        const { getByTestId } = render(<Button onClick={onClick}>+</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("+")
    })
    it('renders <Button /> -', () => {
        const { getByTestId } = render(<Button onClick={onClick}>-</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("-")
    })
    it('renders <Button /> *', () => {
        const { getByTestId } = render(<Button onClick={onClick}>*</Button>);
        const button = getByTestId("button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("*")
    })
    it('renders <Button /> Enter', () => {
        const { getByTestId } = render(<Button enter onClick={onClick}>Enter</Button>);
        const button = getByTestId("enter-button")
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe("Enter")
    })
})
