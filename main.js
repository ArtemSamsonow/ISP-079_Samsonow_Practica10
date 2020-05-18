const adv  = document.querySelector(".adv"),
books = document.querySelectorAll(".book"),
asideBooks = document.querySelector(".books"),
books2List = books[0].querySelectorAll("li"),
books2 = books[0].querySelector("ul"),
books5List = books[5].querySelector("li"),
books5 = books[5].querySelector("ul"),
books6 = books[2].querySelector("ul"),
books6List = books6.querySelectorAll("li"),

newElem = document.createElement("li");
newElem.textContent = "Глава 8: За перделами ES6";
books6List[books6List.length - 2].append(newElem);

adv.remove();

asideBooks.append(books[1]);
asideBooks.append(books[0]);
asideBooks.append(books[4]);
asideBooks.append(books[3]);
asideBooks.append(books[5]);
asideBooks.append(books[2]);

document.body.style = "background-image: url(./image/you-dont-know-js.jpg)";

