import styles from "./FriendList.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline, }) => (
            
            <FriendListItem
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                
                />
              
        ))}
</ul>
)
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default FriendList;
