import { useGetCards } from "../features/useGetCards";
import { Card } from "../Card/Card";

export const List = () => {
    const { cards, error, isLoading } = useGetCards();

    if (isLoading) return "is loading";
    if (error) return error;
    return (
        <ul>
            {cards.map(card => {
                return (
                    <li key={card.id}>
                        <Card card={card} />
                    </li>
                );
            })}
        </ul>
    );
};
