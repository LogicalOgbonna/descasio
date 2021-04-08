import { render } from '@testing-library/react';

import ButtonRow from "./ButtonRow";

describe('Render <ButtonRow /> without crashing', () => {
    const element = render(<ButtonRow> Hello world </ButtonRow>);
    it('renders <ButtonRow />', () => {
        expect(element).toBeTruthy();
    })
})
