Requirements
🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

REFLECTIONS
Started off with planning by making my wireframe for what i want to build and how i want it to look. Got overwhelmed and confused when trying to think of how many tables i would need for the database. Talked it through with Manny and he confirmed what I was think is correct, and it would be two - one for books and one for reviews, which would have a one to many relationships.
After planning the tables, also in figma, I then went into SQL and started creating the tables and inseting the data according to my plans.
When inserting data into tables, SQL would error. Went through the asistant debugger - inserting the code and error to determine the cause, got confused by the error so asked Manny and he pointed out the problem was that I was inserting data into the table for reviews, but hadnt used the ids to link the reviews to the corresponding books. After asking him to explain how it worked, I understood that i needed to go back into the reviews and add the corresponding book id to the reviews to link them. I then tried to select and join them but the query errored. Used the assistnat debugger again and it showed me the issue was with the query - i had written the select, and join as seperate queries when they actually need to be one. Corrected the code, and it ran with no issues.
With my tables linked, I turned my attention vs code and set about creatintg a scratch, and adding in all the demo code from the week which i thought would be revelant for the project.
