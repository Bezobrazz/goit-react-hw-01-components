import s from './Statistics.module.css';

const randomColor = () => {
  const random255 = () => Math.floor(Math.random() * 256);
  return `rgb(${random255()}, ${random255()}, ${random255()})`;
};

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.cardWrapper}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(item => (
            <li
              className={s.item}
              key={item.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={s.label}>{item.label}</span>
              <span className={s.percentage}>{item.percentage}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
