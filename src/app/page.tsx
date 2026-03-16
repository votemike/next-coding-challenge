'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { Item } from './components';

const itemsData = [
  {
    name: 'Item 1',
    description: 'Foo',
  },
  {
    name: 'Item 2',
    description: 'Bar',
  },
  {
    name: 'Item 3',
    description: 'Baz',
  },
  {
    name: 'Item 4',
    description: 'Qux',
  },
];

function ItemCount({ count, name }: { count: number; name: string }) {
  return (
    <div key={name}>
      {name} count: {count}
    </div>
  );
}

type Items = Record<string, { quantity: number }>;

export default function Home() {
  const [items, setItems] = useState<Items>({});
  const [itemCount, setItemCount] = useState<number>(0);

  const addToCart = (product: string) => {
    setItems((prev) => ({
      ...prev,
      [product]: { quantity: (prev[product]?.quantity || 0) + 1 },
    }));

    setItemCount((prev) => prev + 1);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Michael&apos;s Amazing Web Store</p>
        <div>
          <button
            className={styles.basket}
          >{`Basket: ${itemCount} item${itemCount === 1 ? '' : 's'}`}</button>
          {itemsData.map((item, index) => (
            <ItemCount
              key={index}
              name={item.name}
              count={items[item.name]?.quantity || 0}
            />
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {itemsData.map((item, index) => (
          <Item
            key={index}
            callback={addToCart}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
