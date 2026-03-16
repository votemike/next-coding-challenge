'use client';
import { useState } from 'react';
import styles from './page.module.css';

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
    const alreadyInCart = items[product];

    setItems({
      ...items,
      [product]: { quantity: (alreadyInCart?.quantity || 0) + 1 },
    });

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
          <ItemCount name="Item 1" count={items['Item 1']?.quantity || 0} />
          <ItemCount name="Item 2" count={items['Item 2']?.quantity || 0} />
          <ItemCount name="Item 3" count={items['Item 3']?.quantity || 0} />
          <ItemCount name="Item 4" count={items['Item 4']?.quantity || 0} />
        </div>
      </div>

      <div className={styles.grid}>
        <button
          className={styles.card}
          onClick={() => addToCart('Item 1')}
          aria-label="Add to basket"
        >
          <h2>
            Item 1 <span>-&gt;</span>
          </h2>
          <p>Foo</p>
        </button>
        <button
          className={styles.card}
          onClick={() => addToCart('Item 2')}
          aria-label="Add to basket"
        >
          <h2>
            Item 2 <span>-&gt;</span>
          </h2>
          <p>Bar</p>
        </button>
        <button
          className={styles.card}
          onClick={() => addToCart('Item 3')}
          aria-label="Add to basket"
        >
          <h2>
            Item 3 <span>-&gt;</span>
          </h2>
          <p>Baz</p>
        </button>
        <button
          className={styles.card}
          onClick={() => addToCart('Item 4')}
          aria-label="Add to basket"
        >
          <h2>
            Item 4 <span>-&gt;</span>
          </h2>
          <p>Qux</p>
        </button>
      </div>
    </main>
  );
}
