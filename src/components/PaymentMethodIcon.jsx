import React from 'react';

const PaymentMethodIcon = ({ method, className = '' }) => {
  // Material Icons for all payment methods (consistent style)
  const materialIcons = {
    'Zelle': 'account_balance_wallet',
    'PayPal': 'account_balance_wallet',
    'Venmo': 'send',
    'Cash': 'attach_money',
    'Bank Transfer': 'account_balance',
    'bKash': 'phone_android',
    'Nagad': 'phone_android',
    'Rocket': 'phone_android',
    'Other': 'payment',
  };

  return (
    <span className={`material-icons ${className}`}>
      {materialIcons[method] || 'payment'}
    </span>
  );
};

export default PaymentMethodIcon;
