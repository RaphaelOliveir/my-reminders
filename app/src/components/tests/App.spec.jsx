/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('should render Reminder and ReminderList components', () => {
 render(<App />);

 expect(screen.getByText('My Reminders')).toBeInTheDocument();
 expect(screen.getByText('Criar lembrete')).toBeInTheDocument();
 expect(screen.getByText('Lista de lembretes')).toBeInTheDocument();
});
