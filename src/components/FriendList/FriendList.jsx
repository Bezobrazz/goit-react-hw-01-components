import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div className={s.container}>
      <ul className={s.friendList}>
        {friends.map(item => (
          <FriendListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
