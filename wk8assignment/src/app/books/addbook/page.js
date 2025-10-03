//FORMS SERVER FUNCTION DEMO
//new rollercoaster
//TODO: set up a form to create new data in the books table
// - submit action --> server function
// - store the form values
// - insert the values in the database
// - extras (UX) --> refreshes the cache and redirect the user to the rollercoasters page

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function addBook() {
  //handle the submit
  //server function --> async, and "use server"

  async function handleSubmit(formData) {
    //remember this directive!!!!!!
    //we want this function to be executed in the server
    "use server";
    console.log(formData);
    //store the form data
    const formValues = {
      title: formData.get("title"),
      author: formData.get("author"),
      blurb: formData.get("blurb"),
    };
    console.log(formValues);
    //insert the data into the database
    db.query(`INSERT INTO books (title, author, blurb) VALUES($1, $2, $3)`, [
      formValues.title,
      formValues.author,
      formValues.blurb,
    ]);

    //refresh the cache
    revalidatePath("/addbook");

    //redirect the user to the rollercoasters page
    redirect("books");
  }

  return (
    <>
      <h1>Add a new book!</h1>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Book Information</legend>
          <label htmlFor="title">Book name: </label>
          <input type="text" name="title" required />
          <label htmlFor="author">Author: </label>
          <input type="text" name="author" required />
          <label htmlFor="blurb">Book Blurb: </label>
          <input
            type="text"
            name="blurb"
            required
            placeholder="What is this book about?"
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
