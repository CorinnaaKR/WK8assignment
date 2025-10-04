//TODO: render the books data from the database
import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function BooksPage() {
  //query the database --> GET all the data from the table
  const query = await db.query(`SELECT id, title, author, blurb FROM books`);
  console.log(query);
  //wrangle the data
  const books = query.rows;
  //   console.log(books);
  return (
    <div>
      {/* ADD IN THE TITLE AND INFOR TO MAKE THE PAGE DIRECTIVE FOR THE USER */}
      {books.map((book) => {
        return (
          <div key={book.id}>
            <Link href={`/reviews/${book.id}`}>
              {book.title}, {book.author}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

//TODO: render a list of books
//TODO: set up a sorting filter (searchParams)
