import Form from "./components/Form.jsx";
import { db } from "@/utils/utilities.js";

export default function NewReviewPage() {
  async function handleSavePost(formData) {
    "use server"; // makes this function run _on the server_, as if by magic API.
    console.log("Saving post to the database...");

    // get the form data from the formData object next provides
    const username = formData.get("username");
    const review = formData.get("review");

    // insert the data into postgres
    await db.query(`INSERT INTO review (username, review) VALUES ($1, $2)`, [
      username,
      review,
    ]);
    console.log("Review submitted!");

    // revalidate the review page, so it fetches the new data
    revalidatePath("/reviews");

    // redirect the user to the review page
    redirect("/reviews");
  }

  return (
    <form action={handleSubmitReview}>
      <label htmlFor="username">Username: </label>
      <input id="username" name="username" type="text" />
      <label htmlFor="review">Review: </label>
      <textarea id="review" name="review" />
      <button type="submit">Submit Review</button>
    </form>
  );
}
