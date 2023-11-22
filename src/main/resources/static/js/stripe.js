 const stripe = Stripe('pk_test_51OE5pXDstidrkg8hEwCzME1sdLgNTUZRKOllDWBExMz4ev0n05ygQY0rbUl6y9t0xxWCs5ZyjZmzaMLyeSWXgF1M00cnFERZPL');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });