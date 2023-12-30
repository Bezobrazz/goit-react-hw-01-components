import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friendsData from 'Data/friends.json';
import userData from 'Data/user.json';
import statData from 'Data/data.json';
import transactionsData from 'Data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
