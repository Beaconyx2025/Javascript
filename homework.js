const posts = [
  {
    id: 1,
    title: "JavaScript Basics",
    likes: 10,
    comments: 5,
    author: "Alice",
  },
  { id: 2, title: "Learning React", likes: 50, comments: 15, author: "Bob" },
  {
    id: 3,
    title: "Advanced Node.js",
    likes: 20,
    comments: 8,
    author: "Charlie",
  },
  {
    id: 4,
    title: "CSS Tips and Tricks",
    likes: 5,
    comments: 2,
    author: "Alice",
  },
  {
    id: 5,
    title: "Understanding Vue.js",
    likes: 30,
    comments: 10,
    author: "Dave",
  },
  {
    id: 6,
    title: "Async Programming in JS",
    likes: 25,
    comments: 12,
    author: "Eve",
  },
  {
    id: 7,
    title: "Python for Beginners",
    likes: 15,
    comments: 5,
    author: "Alice",
  },
  { id: 8, title: "Mastering Django", likes: 45, comments: 20, author: "Bob" },
  {
    id: 9,
    title: "React Hooks Deep Dive",
    likes: 35,
    comments: 18,
    author: "Charlie",
  },
  {
    id: 10,
    title: "Getting Started with TypeScript",
    likes: 12,
    comments: 4,
    author: "Eve",
  },
  {
    id: 11,
    title: "Building REST APIs with Express",
    likes: 28,
    comments: 7,
    author: "Dave",
  },
  {
    id: 12,
    title: "Effective Debugging in JavaScript",
    likes: 40,
    comments: 12,
    author: "Alice",
  },
  {
    id: 13,
    title: "Introduction to Machine Learning",
    likes: 60,
    comments: 25,
    author: "Bob",
  },
  {
    id: 14,
    title: "Functional Programming in JS",
    likes: 22,
    comments: 9,
    author: "Charlie",
  },
  { id: 15, title: "GraphQL Basics", likes: 18, comments: 6, author: "Dave" },
  {
    id: 16,
    title: "UI/UX Design Principles",
    likes: 50,
    comments: 22,
    author: "Eve",
  },
  {
    id: 17,
    title: "Web Security Essentials",
    likes: 30,
    comments: 14,
    author: "Alice",
  },
  {
    id: 18,
    title: "Data Structures in JavaScript",
    likes: 17,
    comments: 5,
    author: "Charlie",
  },
  {
    id: 19,
    title: "HTML5 and Accessibility",
    likes: 23,
    comments: 3,
    author: "Bob",
  },
  {
    id: 20,
    title: "Intro to WebSockets",
    likes: 21,
    comments: 8,
    author: "Eve",
  },
];

// const map = posts.map((posts) => posts.likes);
// const sorted = map.sort((a, b) => a - b);

// const sort = posts.sort((a, b) => a.likes - b.likes);

// const some = posts.some((posts) => posts.comments > 10);

// const reduce = posts
//   .map((posts) => posts.likes)
//   .reduce((sum, n) => {
//     return sum + n;
//   });

// const map = posts.map((posts) => posts.author.toUpperCase());

// const JavaScript = posts.filter((post) => post.title.includes("JavaScript"));

// const sort = posts.sort(
//   (a, b) => a.likes + a.comments - (b.likes + b.comments)
// );

// const groupedByAuthor = posts.reduce((acc, posts) => {
//   if (!acc[posts.author]) {
//     acc[posts.author] = [];
//   }
//   acc[posts.author].push(posts);
//   return acc;
// }, {});

// console.log(groupedByAuthor);

// const str = posts.map((posts) => posts.title).join(",");

// console.log(str);

const products = [
  { id: 1, name: "Laptop", price: 1500, stock: 30, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 800, stock: 50, category: "Electronics" },
  { id: 3, name: "Desk", price: 300, stock: 20, category: "Furniture" },
  { id: 4, name: "Office Chair", price: 200, stock: 15, category: "Furniture" },
  {
    id: 5,
    name: "Headphones",
    price: 150,
    stock: 100,
    category: "Electronics",
  },
  { id: 6, name: "Monitor", price: 400, stock: 25, category: "Electronics" },
  { id: 7, name: "Tablet", price: 600, stock: 40, category: "Electronics" },
  { id: 8, name: "Coffee Table", price: 250, stock: 5, category: "Furniture" },
  { id: 9, name: "Bookshelf", price: 350, stock: 8, category: "Furniture" },
  {
    id: 10,
    name: "Smartwatch",
    price: 300,
    stock: 70,
    category: "Electronics",
  },
  { id: 11, name: "Blender", price: 100, stock: 60, category: "Appliances" },
  { id: 12, name: "Toaster", price: 50, stock: 80, category: "Appliances" },
  { id: 13, name: "Microwave", price: 200, stock: 35, category: "Appliances" },
  {
    id: 14,
    name: "Electric Kettle",
    price: 70,
    stock: 45,
    category: "Appliances",
  },
  {
    id: 15,
    name: "Gaming Console",
    price: 500,
    stock: 10,
    category: "Electronics",
  },
  {
    id: 16,
    name: "Refrigerator",
    price: 1200,
    stock: 5,
    category: "Appliances",
  },
  { id: 17, name: "Sofa", price: 900, stock: 7, category: "Furniture" },
  { id: 18, name: "Dining Table", price: 600, stock: 6, category: "Furniture" },
  { id: 19, name: "Fan", price: 80, stock: 50, category: "Appliances" },
  { id: 20, name: "Printer", price: 250, stock: 22, category: "Electronics" },
];

// products.push = {
//   id: 21,
//   name: "Tablet",
//   price: 600,
//   stock: 40,
//   category: "Electronics",
// };

// products.find((products) => products.id === 4).name = "Ergonomic Office Chair";

// const deleteSpecial = [];

// for (let i = products.length; i > 0; i--) {
//   const lastDelete = products.pop();

//   if (lastDelete.category.includes("Furniture")) {
//     deleteSpecial.push(lastDelete);
//   } else {
//     products.unshift(lastDelete);
//   }
// }

// console.log("DeleteSpecial:", deleteSpecial);
// console.log("Products:", products);

// const transforend = products.pop();
// const transforfront = products.shift();

// products.unshift(transforend);
// products.push(transforfront);

// console.log(products);

// const stockArr = products.filter((products) => !(products.stock === 0));

// const nameArr = products.map((products) => products.name);

// const priceArr = products.filter((products) => products.price > 500);

// products.sort((a, b) => b.price - a.price);

// const someArr = products.filter((products) => products.stock < 10);
// const someArr1 = [];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].stock < 10) someArr1.push(products[i]);
// }

// console.log("someArr1", someArr1);

// const stockTotal = products
//   .map((products) => products.stock)
//   .reduce((sum, n) => {
//     return sum + n;
//   });
// console.log(stockTotal);

// const categoryName = products.map((products) =>
//   products.category.toUpperCase()
// );
// console.log(categoryName);
// const speicalName = products.filter((products) =>
//   products.name.includes("phone")
// );
// console.log(speicalName);

// const expensive = products.sort((a, b) => b.price - a.price);

// console.log(expensive[0]);

// const nameConnect = products.map((products) => products.name).join(",");

// console.log(nameConnect);

const groupedByCategory = products.reduce((acc, products) => {
  if (!acc[products.category]) {
    acc[products.category] = [];
  }
  acc[products.category].push(products);
  return acc;
}, {});

console.log(groupedByCategory);
