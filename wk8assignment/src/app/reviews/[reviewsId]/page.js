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
  const myParams = await params;
  const reviewsId = myParams.reviewsId;
  // query the database safely
  const queryResponse = await db.query(
    `SELECT books.id, books.title, books.author, books.blurb FROM books WHERE books.id = $1`,
    [reviewsId]
  );
  // const reviewId = await response.json();

  const book = queryResponse.rows[0]; // one book
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
      <Form />
    </div>
  );
}
