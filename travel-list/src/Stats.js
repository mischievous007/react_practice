export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list! 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPackedItems = ~~Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPackedItems === 100
          ? `You got everything! Ready to go ✈️`
          : `👜 You have ${
              numItems > 1 ? `${numItems} items ` : `${numItems} item `
            }
        on your list and you already packed
        ${
          numPackedItems > 1
            ? ` ${numPackedItems} items `
            : ` ${numPackedItems} item `
        }
        (${percentPackedItems}%)`}
      </em>
    </footer>
  );
}
