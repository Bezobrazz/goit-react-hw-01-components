import Profile from './Profile/Profile';
import userData from 'Data/user.json';

export const App = () => {
  return (
    <div>
      <Profile {...userData} />
    </div>
  );
};
