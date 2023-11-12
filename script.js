// //1 Задание
// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} - чётное число`);
//   } else {
//     console.log(`${i} - нечётное число`);
//   }
// }

// //2 Задание
// const post = {
//   author: "John", //вывести этот текст
//   postId: 23,
//   comments: [
//     {
//       userId: 10,
//       userName: "Alex",
//       text: "lorem ipsum",
//       rating: {
//         likes: 10,
//         dislikes: 2, //вывести это число
//       },
//     },
//     {
//       userId: 5, //вывести это число
//       userName: "Jane",
//       text: "lorem ipsum 2", //вывести этот текст
//       rating: {
//         likes: 3,
//         dislikes: 1,
//       },
//     },
//   ],
// };

// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

// //3 Задание

// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// products.forEach((item) => {
//   item.price *= 0.85;
// });

// console.log(products);

// //4 Задание
// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];

// //4.1
// const havePhoto = products.filter((item) => {
//   return item.photos?.length > 0;
// });

// console.log(havePhoto);

// //4.2
// products.sort((a, b) => b.price - a.price);

// console.log(products);

// const sortedByPrice = products.toSorted((a, b) => b.price - a.price); // не мутирует изначальный массив

// //5 Задание
// for (i = 0; i < 10; console.log(i), i++) {}

// //6 Задание

// for (i = 1; i <= 20; i++) {
//   console.log("x".repeat(i));
// }
