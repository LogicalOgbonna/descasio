import { render } from '@testing-library/react';

import DisplayResult from "./DisplayResult";

describe('render <DisplayResult /> without crashing', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<DisplayResult answer={10} input="5 + 5" />)
        const element = getByTestId("display-result");
        expect(element).toBeTruthy();
        expect(element.children.length).toBe(2);
        expect(element.children[0].innerHTML).toBe("5 + 5")
        expect(element.children[1].innerHTML).toBe("10")
    });
    it('renders without crashing different variables', () => {
        const { getByTestId } = render(<DisplayResult answer={20} input="5 * 4" />)
        const element = getByTestId("display-result");
        expect(element).toBeTruthy();
        expect(element.children.length).toBe(2);
        expect(element.children[0].innerHTML).toBe("5 * 4")
        expect(element.children[1].innerHTML).toBe("20")
    });
})
