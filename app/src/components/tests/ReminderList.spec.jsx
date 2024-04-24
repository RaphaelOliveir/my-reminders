/* eslint-disable no-undef */
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';

import ReminderList from '../ReminderList/ReminderList';

jest.mock('axios');

afterEach(() => {
    jest.clearAllMocks();
});

describe("ReminderList", () => {
    it('should render loading indicator initially', () => {
        render(<ReminderList myReminders={[]} updateReminders={() => { }} />);
        expect(screen.getByText('Carregando...')).toBeInTheDocument();
    });
    
    it('should fetch reminders and display them', async () => {
        const mockReminders = [{ id: 1, nome: 'Comprar pão', data: '2024-04-24' }];
        axios.get.mockResolvedValue({ data: mockReminders });
    
        render(<ReminderList myReminders={[]} updateReminders={() => { }} />);
    
        await waitFor(() => {
            expect(screen.getByText('Comprar pão')).toBeInTheDocument();
        });
    });
    
    it('should delete a reminder and update the list', async () => {
        const mockReminders = [{ id: 1, nome: 'Comprar pão', data: '2024-04-24' }];
        axios.get.mockResolvedValue({ data: mockReminders });
        axios.delete.mockResolvedValue({ data: 'Lembrete deletado com sucesso' });
    
        render(<ReminderList myReminders={[]} updateReminders={() => { }} />);
    
        await waitFor(() => {
            expect(screen.getByText('Comprar pão')).toBeInTheDocument();
        });
    
        fireEvent.click(screen.getByTestId('delete-reminder-icon'));
    
        await waitFor(() => {
            expect(screen.queryByText('Comprar pão')).not.toBeInTheDocument();
        });
    });
})
