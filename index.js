const express = require("express");
const app = express();

const books = [
  "Bhagavad-gītā As It Is",
  "Śrīmad-Bhāgavatam",
  "Caitanya-caritāmṛta",
  "Nectar of Devotion",
  "Nectar of Instruction",
  "Kṛṣṇa Book",
  "Teachings of Lord Caitanya"
];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Srila Prabhupada</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #fafafa;
            padding: 40px;
            max-width: 800px;
            margin: auto;
          }
          h1 { color: #6b2d5c; }
          h2 { margin-top: 30px; }
          ul { line-height: 1.8; }
          footer {
            margin-top: 40px;
            font-size: 0.9em;
            color: #555;
          }
        </style>
      </head>
      <body>
        <h1>Śrīla Prabhupāda</h1>
        <p>
          A. C. Bhaktivedanta Swami Prabhupāda was the founder-ācārya of ISKCON.
          He introduced Bhakti-yoga and the Hare Krishna movement worldwide.
        </p>

        <h2>Major Books</h2>
        <ul>
          ${books.map(b => `<li>${b}</li>`).join("")}
        </ul>

        <footer>
          Hare Krishna 🙏 | All glories to Śrīla Prabhupāda
        </footer>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
