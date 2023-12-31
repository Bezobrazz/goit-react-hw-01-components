import s from './FriendList.module.css';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={`${s.status} ${isOnline ? s.statusOnline : s.statusOffline}`}
      >
        {isOnline}
      </span>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      </div>
      <p className={s.name}>{name}</p>
    </li>
  );
}
