const winnerList = [
  {
    name: "Winner Name1",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name2",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name3",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name4",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name5",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name6",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name7",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name8",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name9",
    email: "winner@gmail.com",
  },
  {
    name: "Winner Name10",
    email: "winner@gmail.com",
  },
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function openWinnerModal() {
  const winnerGrid = document.querySelector(".winner-grid");
  const shuffledArray = shuffle(winnerList);
  let itemNodes = ``;
  shuffledArray.forEach((winner) => {
    itemNodes += `<div class="winner-item">
    <div class="circle"></div>
    <div class="winner-detail">
      <p>${winner.name}</p>
      <p>${winner.email}</p>
    </div>
  </div>`;
  });
  winnerGrid.innerHTML += itemNodes;
  document.getElementById("winnerModal").style.display = "block";
}

function closeWinnerModal() {
  console.log("I am being clicked");
  const winnerGrid = document.querySelector(".winner-grid");
  winnerGrid.innerHTML = "";
  document.getElementById("winnerModal").style.display = "none";
}
