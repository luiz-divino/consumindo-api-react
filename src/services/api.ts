import { ApiResponse } from '../types/apiContract';

export const api = async (): Promise<ApiResponse[]> => {
    try {
        const response = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts');
        const data: ApiResponse[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};