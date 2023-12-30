import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import userData from 'Data/user.json';
import statData from 'Data/data.json';
import friendsData from 'Data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friendsData} />
    </div>
  );
};
