type InventoryCardProps = {
  name: string;
};

const InventoryCard = ({ name }: InventoryCardProps) => {
  return (
    <div
      className="border-rounded mb-2 w-full border p-4"
      data-testid="inventory-card"
    >
      <p>{name}</p>
    </div>
  );
};

export default InventoryCard;
