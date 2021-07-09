const Card = ({ headline, authorPhoto, authorName}) => {
  const card = document.createElement("div");
  const headlineCtnr = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const qoute = document.createElement("span");

  card.classList.add("card");
  headlineCtnr.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headlineCtnr.textContent = headline;
  img.src = authorPhoto;
  qoute.textContent = `By ${authorName}`;
  
  imgContainer.append(img);
  author.append(imgContainer, qoute);
  card.append(headlineCtnr, author);

  return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
}
import axios from "axios";

const cardAppender = (selector) => {
  const container = document.querySelector(selector);

  const apiUse = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/articles`);
      const data = await res.data;
      const articles = await data.articles;
      const articleKeys = await Object.keys(articles);
      const articlesArray = await articleKeys.map(key => articles[key])
      console.log(articlesArray);
      articlesArray.forEach(arr => {
        const cards = arr.map(article => Card(article));
        cards.forEach(card => {
          container.append(card)
        })

      })
    } catch(err) {
      throw err;
    }
  }
  apiUse();

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
