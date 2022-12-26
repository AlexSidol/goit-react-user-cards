import { Component } from 'react';

import User from 'components/User/User';
import css from './UsersList.module.css';

export class UsersList extends Component {
  clickBtnUl = id => {
    this.props.clickBtn(id);
  };
  render() {
    const { users } = this.props;

    return (
      <ul className={css.cards__block}>
        {users.map(el => (
          <User key={el.id} userItem={el} clickBtn={this.clickBtnUl} />
        ))}
      </ul>
    );
  }
}

export default UsersList;
