import User from 'components/User/User';
import css from './UsersList.module.css';

export const UsersList = ({ users }) => {
  return (
    <ul className={css.cards__block}>
      {users.map(el => (
        <User userItem={el} />
      ))}
    </ul>
  );
};
export default UsersList;
