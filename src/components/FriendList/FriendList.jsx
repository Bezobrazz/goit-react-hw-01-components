import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <div className={s.container}>
      <ul className={s.friendList}>
        {friends.map(item => (
          <li className={s.item} key={item.id}>
            <span
              className={`${s.status} ${
                item.isOnline ? s.statusOnline : s.statusOffline
              }`}
            >
              {item.isOnline}
            </span>
            <div className={s.avatarWrapper}>
              <img
                className={s.avatar}
                src={item.avatar}
                alt="User avatar"
                width="48"
              />
            </div>
            <p className={s.name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
