//TODO: get the individual book data from the database
//TODO: implement a delete action to delete comments

// export default function PostIdPage() {
//when you are collecting the comment form data, the user does not give you the foreign key value
//when you insert the form data into the table, YOU have to also insert the foreign key value
// the foreign key value references the id in the other table --> this is how you know what value to insert
// return (
//   <div>
//     Individual post page
{
  /* TODO: render the individual post data */
}
{
  /* TODO: set up a form for the user to leave a comment (you can use a component Form or you could write the <form></form> directly on this page) */
}
{
  /* TODO: render the list of comments */
}
{
  /* TODO: add a delete button per comment (can be a component, if you want)*/
}
{
  /* </div>
  );
} */
}

//DYNAMIC PAGE

import { db } from "@/utils/dbConnection";
import Form from "@/components/Form.jsx";

export default async function reviewIdPage({ params }) {
  const bookId = await params.bookId;
  // query the database safely
  const query = db.query(
    "SELECT id, title, author, blurb FROM books WHERE id = ${book_id}"
  );

  // const reviewId = await response.json();

  const book = query.rows; // one book
  console.log(book);
  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>Author: {book.author}</h3>
      <h3>Blurb: {book.blurb}</h3>

      {/* review form */}
      <Form bookId={book.id} />
    </div>
  );
}

// export default async function UserIdPage({ params }) {
//   const userId = await params.userId;
// /   //we can use the value of params in our fetch to specifically get one user
//   const response = await fetch(`https://dummyjson.com/users/${userId}`);
//   const data = await response.json();

//   return (
//     <>
//       <h1>One user: {userId}</h1>
//       <ul>
//         <li>{data.firstName}</li>
//         <li>{data.lastName}</li>
//         <li>{data.email}</li>
//         <li>{data.university}</li>
//       </ul>
//     </>
//   );
// }

// import { db } from "@/utils/dbConnection";
// import Link from "next/link";

// export default async function BooksPage() {
//query the database --> GET all the data from the table
//   const query = await db.query(`SELECT id, title, author, blurb FROM books`);
//   console.log(query);
//wrangle the data
//   const books = query.rows;
//   console.log(books);
//   return (
//     <div>
//       {/* ADD IN THE TITLE AND INFOR TO MAKE THE PAGE DIRECTIVE FOR THE USER */}
//       {books.map((book) => {
//         return (
//           <div key={book.id}>
//             <Link href={`/reviews/${book.id}`}>
//               {book.title}, {book.author}
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
