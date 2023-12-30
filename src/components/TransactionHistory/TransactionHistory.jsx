import s from './TransactionHistory.module.css';

const getRowColor = index => (index % 2 === 0 ? s.evenRow : s.oddRow);

export default function TransactionHistory({ items }) {
  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className={`${s.td} ${getRowColor(index)}`}>{item.type}</td>
              <td className={`${s.td} ${getRowColor(index)}`}>{item.amount}</td>
              <td className={`${s.td} ${getRowColor(index)}`}>
                {item.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
