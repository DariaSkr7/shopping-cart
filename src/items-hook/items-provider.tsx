import { useState } from "react"
import { ItemContext, ShoppingItem } from "./item-context";

export function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const addItem = (item: ShoppingItem) => {
    setItems([...items, item])
  }

  const removeItem = (item: ShoppingItem) => {
    const index = items.findIndex(i => i.id === item.id);

    if (index !== -1) {
      items.splice(index, 1)
      setItems([...items])
    }
  }

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemContext.Provider>
  );
}
