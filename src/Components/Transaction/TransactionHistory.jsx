import PropTypes from "prop-types";
import styles from "./Transaction.module.css"

const TransactionHistory = ({ items }) => (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.Th}>Type</th>
      <th className={styles.Th}>Amount</th>
      <th className={styles.Th}>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td className={styles.Td}>{type }</td>
                <td className={styles.Td}>{ amount}</td>
                <td className={styles.Td}>{currency }</td>
              </tr>
            ))}
    
  </tbody>
</table>

)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default TransactionHistory