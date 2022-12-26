import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { Component } from 'react';

import css from './App.module.css';
import UsersList from './UsersList/UsersList';
import users from '../data/users.json';

export class App extends Component {
  state = {
    users: users.map(el => ({ ...el, isBtnActive: false })),
  };

  componentDidMount() {
    const usersList = JSON.parse(localStorage.getItem('usersList'));
    if (usersList) {
      this.setState({ users: usersList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem('usersList', JSON.stringify(this.state.users));
    }
  }

  onBtnChange = id => {
    this.setState(({ users }) => ({
      users: users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            isBtnActive: !user.isBtnActive,
            followers: user.isBtnActive
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      }),
    }));
  };

  render() {
    return (
      <div className={css.section}>
        <UsersList users={this.state.users} clickBtn={this.onBtnChange} />
        <GlobalStyleComponent />
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div className={css.section}>
//       <UsersList users={users} />
//       <GlobalStyleComponent />
//     </div>
//   );
// };
