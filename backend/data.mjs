import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Dakota",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Bob",
      email: "bob@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "shirts",
      image: "/images/shirt.jpg", // 679px x 829px
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Nike Slim pants",
      slug: "nike-slim-pants",
      category: "pants",
      image: "/images/pants.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality pants",
    },
    {
      name: "addidas Slim shirt",
      slug: "addidas-slim-shirt",
      category: "shirts",
      image: "/images/shirt.jpg",
      price: 120,
      countInStock: 10,
      brand: "addidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "adidas Slim shirt",
      slug: "adidas-slim-shirt",
      category: "shirts",
      image: "/images/shirt.jpg",
      price: 120,
      countInStock: 0,
      brand: "addidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
  ],
};

export default data;
