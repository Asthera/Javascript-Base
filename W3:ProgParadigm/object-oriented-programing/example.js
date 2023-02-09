var purchase = {
  shoes: 50,
  statetax: 1.2,
  totalPrice: function () {
    // The "this" keyword is an alias for the name of the object.
    let calculation = this.shoes * this.statetax;
    console.log(calculation);
  },
};
purchase.totalPrice(); // 60
