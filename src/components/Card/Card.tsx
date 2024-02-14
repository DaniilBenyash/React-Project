import { useGetCard } from "../features/useGetCard";
import { Card as CardType } from "../features/useGetCard";

type CardProps = {
    card: CardType;
};

export const Card = ({ card }: CardProps) => {
    const { getCard, cardInfo, error, isLoading } = useGetCard();
    const handleClick = () => {
        getCard(card.id);
    };

    console.log(cardInfo);
    return (
        <button onClick={handleClick}>
            <div>{card.title}</div>
            {cardInfo && <p>{cardInfo.body}</p>}
        </button>
    );
};
