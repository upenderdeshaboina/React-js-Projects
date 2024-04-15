import {FaShoppingCart} from 'react-icons/fa'

const Header = props => {
  const {cartItems} = props
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="header">
      <h1 className="header-name">UNI Resto Cafe</h1>
      <div className="cart-icon">
        <p className="my-orders">My Orders</p>
        <FaShoppingCart size={25} />
        <span className="badge">{totalItems}</span>
      </div>
    </nav>
  )
}

export default Header
