export const api = async() => {
    const URL = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching API data:', error);
        throw error;
    }
};
