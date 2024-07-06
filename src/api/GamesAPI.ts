import { GameProps } from '../Types/GamesTypes'


export const fetchGames = async (): Promise<GameProps[]> => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            
            throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching games:', error);
        throw error;
    }
};

// export const fetchGameCategory = () => {

//     const organizeByCategory = (data): CategorizedGames => {
//         return data.reduce((acc, item) => {
//             const { category } = item;
//             if (!acc[category]) {
//                 acc[category] = [];
//             }
//             acc[category].push(item);
//             return acc;
//         }, {} as CategorizedGames);
//     };

//     return organizeByCategory

// }

