/* eslint-disable no-undef */
import { render, fireEvent, screen } from '@testing-library/react';

import Reminder from '../Reminder/Reminder';

describe("Reminder", () => {
    it('should render inputs and button', () => {
        render(<Reminder onAdd={() => { }} />);

        expect(screen.getByPlaceholderText('Ex: Comprar pão')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Ex: Comprar pão')).toHaveValue('');

        expect(screen.getByPlaceholderText('Ex: Comprar pão')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Ex: Comprar pão')).toHaveValue('');

        expect(screen.getByText('Criar lembrete')).toBeInTheDocument();
    });

    window.alert = jest.fn();

    it('should display an alert after clicking the "Criar lembrete" button', () => {
        render(<Reminder onAdd={() => { }} />);

        fireEvent.change(screen.getByPlaceholderText('Ex: Comprar pão'), { target: { value: 'Comprar pão' } });
        fireEvent.change(screen.getByPlaceholderText('Ex: Comprar pão'), { target: { value: '2024-04-24' } });

        fireEvent.click(screen.getByText('Criar lembrete'));

        expect(window.alert).toHaveBeenCalled();
    });
})
