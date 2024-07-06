interface Rating {
    rate: number;
    count: number;
  }
  
  export interface GameProps {
    category: string;
    description: string;
    id: number;
    price: number;
    rating: Rating;
    title: string;
    image: string;
  }

