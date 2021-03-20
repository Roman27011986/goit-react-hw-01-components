import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li className={styles.item} key={id} >
        <span className={isOnline ? styles.isOnline : styles.offLine } ></span>
        <img className={avatar} src={avatar} alt="" width="48" />
        <p className={name}>{name }</p>
    </li>    

)

FriendListItem.propTypes = {
    
    avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,



}
export default FriendListItem
