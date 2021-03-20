import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css"
import defImg from "./def.img.svg"
const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} width="280" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.list}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
