export const api = async() => {
    try {
        const response = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}