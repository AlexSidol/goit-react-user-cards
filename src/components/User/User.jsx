import css from './User.module.css';
import Logo from '../../images/Logo.png';
import Picture from '../../images/Picture.png';
import { Component } from 'react';

export class User extends Component {
  onBtnClick = id => {
    this.props.clickBtn(id);
  };

  render() {
    const { id, user, tweets, followers, avatar, isBtnActive } =
      this.props.userItem;

    const FollowersNumber = number => {
      return number.toLocaleString('en');
    };

    return (
      <li className={css.card}>
        <img src={Logo} alt="Logo" className={css.logo} />
        <img src={Picture} alt="hero" className={css.picture} />
        <div className={css.element}></div>
        <div className={css.ellipse__stroke}>
          <div className={css.ellipse}>
            <img src={avatar} alt={user} className={css.card__avatar} />
          </div>
        </div>
        <p className={css.card__tweets}>{tweets} tweets</p>
        <p className={css.card__followers}>
          {FollowersNumber(followers)} followers
        </p>

        <button
          onClick={() => this.onBtnClick(id)}
          className={isBtnActive ? css.button__change : css.card__button}
          type="button"
        >
          {isBtnActive ? 'Following' : 'Follow'}
        </button>
      </li>
    );
  }
}

export default User;
