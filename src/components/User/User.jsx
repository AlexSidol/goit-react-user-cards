import css from './User.module.css';
import Logo from '../../images/Logo.png';
import Picture from '../../images/Picture.png';

export const User = ({ userItem }) => {
  const { id, user, tweets, followers, avatar } = userItem;

  console.log(id, user, tweets, followers, avatar);

  return (
    <li key={id} className={css.card}>
      <img src={Logo} alt="Logo" className={css.logo} />
      <img src={Picture} alt="hero" className={css.picture} />
      <div className={css.element}></div>
      <div className={css.ellipse__stroke}>
        <div className={css.ellipse}>
          <img src={avatar} alt={user} className={css.card__avatar} />
        </div>
      </div>
      <p className="tweets">{tweets} tweets</p>
      <p className="followers">{followers} followers</p>
      <button className={css.card__button} type="button">
        Follow
      </button>
    </li>
  );
};
export default User;
