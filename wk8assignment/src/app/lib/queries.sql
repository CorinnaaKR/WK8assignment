--TODO: add your SQL queries here for reference (the one in your SQL editor)

CREATE TABLE IF NOT EXISTS review (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT NOT NULL, 
  review TEXT NOT NULL,
  books_id INT REFERENCES books(id) --> foreign key
);

CREATE TABLE IF NOT EXISTS books (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255)  NOT NULL,
  author TEXT NOT NULL, 
  blurb TEXT
);

INSERT INTO books (title, author, blurb) values
('Harry Potter', 'J.K.Rowling', 'The Harry Potter series follows orphan Harry Potter, who discovers on his eleventh birthday that he is a wizard and is invited to Hogwarts School of Witchcraft and Wizardry. There, he learns of a hidden wizarding world, makes friends with Ron and Hermione, and uncovers his own legendary past as "The Boy Who Lived"—a survivor of the evil wizard Voldemort. The series details Harry"s journey through magical education, the ongoing struggle to defeat Voldemort, and the challenges he faces in the wizarding world'),
('Twilight Series', 'Stephanie Mayer','The Twilight series follows Bella Swan, who moves to the gloomy town of Forks, Washington, and falls in love with the mysterious and alluring Edward Cullen, a vampire who struggles with his dangerous nature and their forbidden romance. As Bella delves deeper into Edward"s supernatural world, she and those around her become endangered, leading to a suspenseful and romantic story that explores the battle between instinct and desire.'),
('The Hunger Games', 'Suzanne Collins', 'The Hunger Games series takes place in the dystopian nation of Panem, where the affluent Capitol forces each of the 12 districts to send two teenage tributes—a boy and a girl—to fight to the death in the annual Hunger Games for the entertainment of the nation. The story follows Katniss Everdeen, a fiercely independent girl who volunteers to take her younger sister"s place in the brutal, televised competition, proving to be a natural survivor with a fierce spirit that sparks a rebellion against the Capitol.'),
('The Handmaid"s Tale', 'Margarat Atwood', 'The Handmaid"s Tale describes a dystopian society, the Republic of Gilead, where a totalitarian regime has enslaved fertile women called Handmaids to bear children due to a collapse in birthrates. The story follows Offred, a Handmaid whose only function is to serve a Commander and his wife by having a child, while she clings to memories of her past life and struggles to survive in this oppressive world where she is stripped of her freedom, name, and family'),
('Fifty Shades of Grey', 'E.L.James', 'The Fifty Shades trilogy follows Anastasia Steele and Christian Grey"s passionate and complex relationship, beginning when Ana interviews the wealthy, intimidating entrepreneur Christian and they embark on a daring affair. While Ana explores her own desires and Christian battles inner demons and a compulsion to control, their relationship deepens, leading to challenges with love, trust, and their different worlds.'),
('Lord of the Rings', 'J.R.R.Tolkien', 'Sauron, the Dark Lord, seeks to rule Middle-earth with the Rings of Power. His plan is thwarted by the loss of the One Ring, which has come into the possession of the hobbit Bilbo Baggins. Frodo Baggins inherits the Ring from his cousin Bilbo in the Shire and is tasked with the perilous journey to the Crack of Doom within Sauron"s territory to destroy the Ring.'),
('Bridgerton', 'Julia Quinn', 'The Bridgerton series follows the eight noble Bridgerton siblings as they search for love and happiness in Regency-era London society, with each book focusing on a different sibling"s romance, often involving classic tropes like marriage of convenience, fake dating, or friends-to-lovers, all under the scrutiny of gossip and high society.'),
('The Witcher', 'Andrzej Sapkowski', 'The Witcher book series follows the story of Geralt of Rivia, a monster-hunting Witcher in a medieval-inspired world, as he becomes entangled with the prophesied princess Ciri and must protect her from those who covet her power, ultimately navigating a land consumed by war and prejudice.');

INSERT INTO review (username, review, books_id) VALUES
('Bookworm','I read first read this books series when I was 13, and my Nanna bought it for me to encourage me back into reading. I binged it so hard and have been a bookworm ever since.', 5),
('Geralt','I loved loved loved the game. Didn''t realise it was a book series till the netflix series came out!', 11),
('Froddo','I worked bloody hard on this journey, everyone should go and read about it.', 9),
('FantasyMe','I love Atwood, her skill as a writer transcends all the rules, however this particular book wasn''t my cup of tea.', 7),
('Griffin','I was raised on the harry potter books, they formed a staple of my childhood and awoke my imagination at a young age.', 4),
('Jane','I liked the first hunger games book but not the second two. I felt like they were drama for drama sake, and completely unnecessary. I wish I stopped reading after finishing the first book. Nothing but disappointment after.', 6),
('DukeLover','I love the humor in the bridgeton series', 10),
('GreyArea','I didn''t enjoy the first book, it was repetitive and boring, however I pushed myself through to the second and third book and found that the plot and character developement are so much more prevalent in the second two books so I actually enjoyed the second and third book way more than the first!', 8);

SELECT books.title, books.author, books.blurb
FROM books
JOIN review ON books.id = review.books_id; 

