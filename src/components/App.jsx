import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userData from 'Data/user.json';
import statData from 'Data/data.json';

export const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statData} />
    </div>
  );
};
