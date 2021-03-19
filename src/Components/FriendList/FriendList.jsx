import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className={styles.item} >
                <FriendListItem
                    avatar={avatar}
                    name={name}
                isOnline={isOnline}
                id={id}
                />
              </li>  
        ))}
</ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar:PropTypes.string.isRequired,
                name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired,

        })
    )
}
export default FriendList