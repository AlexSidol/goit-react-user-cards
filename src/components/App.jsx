import { GlobalStyleComponent } from 'styles/GlobalStyles';
import css from './App.module.css';
import UsersList from './UsersList/UsersList';
import users from '../data/users.json';

// console.log(users);

export const App = () => {
  return (
    <div className={css.section}>
      <UsersList users={users} />
      <GlobalStyleComponent />
    </div>
  );
};
