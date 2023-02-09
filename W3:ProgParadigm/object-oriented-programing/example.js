var purchase = {
  shoes: 50,
  statetax: 1.2,
  totalPrice: function () {
    let calculation = this.shoes * this.statetax;
    console.log(calculation);
  },
};
purchase.totalPrice();
