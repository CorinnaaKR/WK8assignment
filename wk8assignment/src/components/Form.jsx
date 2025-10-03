//TODO: set up your reviews form in here (you could also do it on the page.js directly)

//TODO: set up a form to create new data in the books table
// - submit action --> server function
// - store the form values
// - insert the values in the database
// - extras (UX) --> refreshes the cache and redirect the user to the rollercoasters page

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function Form({ books_id }) {
  //handle the submit
  //server function --> async, and "use server"

  async function handleSubmit(formData) {
    //remember this directive!!!!!!
    //we want this function to be executed in the server
    "use server";
    console.log(formData);
    //store the form data
    const formValues = {
      username: formData.get("username"),
      review: formData.get("review"),
    };
    console.log(formValues);
    //insert the data into the database
    db.query(
      `INSERT INTO review (username, review, books_id) VALUES($1, $2, $3)`,
      [formValues.username, formValues.review, books_id]
    );

    //refresh the cache
    revalidatePath("/reviews");

    //redirect the user to the rollercoasters page
    redirect("reviews");
  }

  return (
    <>
      <h1>Add a new review!</h1>
      <form action={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" required />
          <label htmlFor="review">Leave your review: </label>
          <input
            type="text"
            name="review"
            required
            placeholder="Tell us what you think!"
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
