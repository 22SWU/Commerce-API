const router = require("express").Router();

// const KEY = process.env.STRIPE_KEY;
// const stripe = require("stripe")(KEY);

const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51KPfeCBUYkIjKhCJYVsrT2cTEZlHGZOaG1GCIxTlLvOyIR5DL6inAbDZfUQDVMl0Q5ybca7ozO6yOhd3whkm2CPt00LzRXV18R"
);

console.log(process.env.STRIPE_KEY);
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
