import { TbPokeballOff } from "react-icons/tb";

const InventoryEmptyInventory = () => {
  return (
    <div
      className="relative flex h-96 items-center justify-center"
      data-testid="empty-inventory"
    >
      <h1 className="text-center text-3xl">
        Currently the inventory is empty!
      </h1>

      <TbPokeballOff
        size={240}
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform opacity-10"
      />
    </div>
  );
};

export default InventoryEmptyInventory;
