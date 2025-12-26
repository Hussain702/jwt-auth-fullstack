const product = (req, res) => {
  res.json([
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Book", price: 20, category: "Education" },
    { name: "Shoes", price: 60, category: "Fashion" },
    { name: "Coffee Mug", price: 10, category: "Kitchen" }
  ]);
};

module.exports = { product };
