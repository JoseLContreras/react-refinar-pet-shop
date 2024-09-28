import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      {/* FontAwesome para React JS. */}
      <FontAwesomeIcon icon={faDog} size="4x" color="black" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
