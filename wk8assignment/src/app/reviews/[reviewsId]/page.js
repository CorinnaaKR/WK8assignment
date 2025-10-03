//TODO: get the individual post data from the database
//TODO: implement a delete action to delete comments

export default function PostIdPage() {
  //when you are collecting the comment form data, the user does not give you the foreign key value
  //when you insert the form data into the table, YOU have to also insert the foreign key value
  // the foreign key value references the id in the other table --> this is how you know what value to insert
  return (
    <div>
      Individual post page
      {/* TODO: render the individual post data */}
      {/* TODO: set up a form for the user to leave a comment (you can use a component Form or you could write the <form></form> directly on this page) */}
      {/* TODO: render the list of comments */}
      {/* TODO: add a delete button per comment (can be a component, if you want)*/}
    </div>
  );
}

/FORMS SERVER FUNCTION DEMO
//new rollercoaster
//TODO: set up a form to create new data in the rollercoasters table
// - submit action --> server function
// - store the form values
// - insert the values in the database
// - extras (UX) --> refreshes the cache and redirect the user to the rollercoasters page

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewReviewPage() {
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
      `INSERT INTO review (username, review,) VALUES($1, $2)`,
      [formValues.username, formValues.review]
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
          <input type="text" name="name" required />
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