import { render, fireEvent, screen } from '@testing-library/react';

import Main from '../views/Main';

const setup = () => {
    const utils = render(<Main />);
    const input = utils.getByTestId('input') as HTMLInputElement;
    const button = utils.getByRole('button') as HTMLButtonElement;
    return {
      input,
      button,
      ...utils,
    };
  };

  describe('Princial component', () => {
    describe('When access the app', () => {
      it('Input to search', () => {
        const { input } = setup();
        expect(input.disabled).toBe(false);
      });
  
      it('Button to search', () => {
        const { button } = setup();
        expect(button.disabled).toBe(false);
      });
    });
  });