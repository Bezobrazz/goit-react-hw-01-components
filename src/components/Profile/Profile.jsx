import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.card}>
      <div className="description">
        <div className={s.avatarWrapper}>
          <img src={avatar} alt="User avatar" className={s.avatar} />
        </div>
        <h2 className={s.username}>{username}</h2>
        <p className={s.descrTag}>@{tag}</p>
        <p className={s.descrLoca}>{location}</p>
      </div>

      <ul className={s.statsWrapper}>
        <li className={s.statsItem}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className="label">Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className="label">Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
