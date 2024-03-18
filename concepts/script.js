let contentNo = 0;

function getRandomColor() {
  const colors = [
    "rgb(0, 136, 255)",
    "rgb(255, 0, 0)",
    "rgb(34, 0, 255)",
    "rgb(255, 0, 251)",
    "rgb(0, 255, 64)",
    "rgb(0, 255, 242)",
    "rgb(255, 162, 0)",
    "rgb(255, 85, 0)",
    "rgb(0, 255, 229)",
    "rgb(47, 255, 0)",
    "rgb(0, 17, 255)",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function getContent() {
  const content = document.createElement("div");
  content.classList.add("content");

  const heading = document.createElement("h2");
  heading.innerText = `New Content no : ${contentNo++}`;
  heading.style.color = getRandomColor();

  const paragraph = document.createElement("p");
  paragraph.innerText = getParagraph();
  paragraph.style.color = getRandomColor();

  content.appendChild(heading);
  content.appendChild(paragraph);

  return content;
}

function getParagraph() {
  const dummyText =
    "Loremd ipsum adsf  dsfasd  a dolor sdw we sit amet consectetur adipisicing elit. Cumque inventore ab maxime ducimus et nisi dolorem similique id impedit deserunt";

  const dummyWordList = dummyText.split(" ");

  let totalWords = Math.floor(Math.random() * 65 + 30);
  let paragraphs = [];

  for (let i = 0; i < totalWords; i++) {
    const randomWord =
      dummyWordList[Math.floor(Math.random() * dummyWordList.length)];

    paragraphs.push(randomWord);
  }

  return paragraphs.join(" ");
}

function fetchContents() {
  return new Promise((res) => {
    const time = Math.floor(Math.random() * 4 + 1) * 1000;

    setTimeout(() => {
      const contents = [];

      for (let i = 0; i < 6; i++) {
        let content = getContent();
        contents.push(content);
      }
      res(contents);
    }, time);
  });
}

let isFetching = false;

async function loadData(box) {
  if (!isFetching) {
    isFetching = true;
    const contents = await fetchContents();

    for (let content of contents) {
      box.appendChild(content);
    }
    isFetching = false;
  }
}

const contentBox = document.getElementById("content-box");

// initial Content
// for (let i = 0; i < 5; i++) {
//   contentBox.appendChild(getContent());
// }

// here is logic
const loader = document.getElementById("circle");

const observer = new IntersectionObserver((items) => {
  const trackingInfo = items[0];

  if (trackingInfo.isIntersecting) {
    loadData(contentBox);
  }
});

observer.observe(loader);
