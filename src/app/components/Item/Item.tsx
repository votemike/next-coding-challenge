import styles from './item.module.scss';

interface ItemProps {
  callback: (name: string) => void;
  name: string;
  description: string;
}

export const Item = ({ callback, name, description }: ItemProps) => {
  return (
    <button
      className={styles.card}
      onClick={() => callback(name)}
      aria-label="Add to basket"
    >
      <h2>
        {name} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </button>
  );
};
