import styles from "./FriendList.module.css"
const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
        <span className={isOnline ? styles.isOnline : styles.offLine }></span>
        <img className={avatar} src={avatar} alt="" width="48" />
        <p className={name}>{name }</p>
    </>    

)
export default FriendListItem