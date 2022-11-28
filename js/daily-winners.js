const dailyWinner = [
  {
    date: "Saturday, 9 Apr, 08:00 PM",
    first_team: {
      name: "Mumbai",
      imageSrc: "./assets/Jerseys/mumbai_jersey.png",
    },
    second_team: {
      name: "Chennai",
      imageSrc: "./assets/Jerseys/chennai_jersey.png",
    },
    result: {
      team: "Mumbai",
      runs: "182 RUNS",
    },
    winnerList: {},
  },
  {
    date: "Saturday, 8 Apr, 06:00 PM",
    first_team: {
      name: "Delhi",
      imageSrc: "./assets/Jerseys/delhi_jersey.png",
    },
    second_team: {
      name: "Punjab",
      imageSrc: "./assets/Jerseys/punjab_jersey.png",
    },
    result: {
      team: "Punjab",
      runs: "182 RUNS",
    },
    winnerList: {},
  },
  {
    date: "Saturday, 8 Apr, 08:00 PM",
    first_team: {
      name: "Kolkata",
      imageSrc: "./assets/Jerseys/kolkata_jersey.png",
    },
    second_team: {
      name: "Chennai",
      imageSrc: "./assets/Jerseys/bangalore_jersey.png",
    },
    result: {
      team: "Kolkata",
      runs: "182 RUNS",
    },
    winnerList: {},
  },
  {
    date: "Saturday, 7 Apr, 06:00 PM",
    first_team: {
      name: "Rajasthan",
      imageSrc: "./assets/Jerseys/rajasthan_jersey.png",
    },
    second_team: {
      name: "Hyderabad",
      imageSrc: "./assets/Jerseys/hyderabad_jersey.png",
    },
    result: {
      team: "Rajasthan",
      runs: "182 RUNS",
    },
    winnerList: {},
  },
];

let show = "less";

function createDailyWinner(forShowMore = false) {
  let winnerNode = "";
  const dailyWinnerTable = document.querySelector("#winner-table");
  for (let i = 0; i < dailyWinner.length; i += 1) {
    if (i >= 2 && show === "less") {
      winnerNode += `<div class="daily-winner-content" style="display:none">
        <div class="daily-winner-content-date-time">
          ${dailyWinner[i].date}
        </div>
        <div class="daily-winner-content-match-between">
          <div class="team-image">
            <img src="${dailyWinner[i].first_team.imageSrc}" />
            <p>${dailyWinner[i].first_team.name}</p>
          </div>
          <p style="margin-bottom: 4rem">vs</p>
          <div class="team-image">
            <img src="${dailyWinner[i].second_team.imageSrc}" />
            <p>${dailyWinner[i].first_team.name}</p>
          </div>
        </div>
        <div class="result">
          <p>${dailyWinner[i].result.team}</p>
          <p>${dailyWinner[i].result.runs}</p>
          <button style="font-size:1.2rem">View Winners List</button>
        </div>
        </div>`;
    } else {
      winnerNode += `<div class="daily-winner-content">
        <div class="daily-winner-content-date-time">
          ${dailyWinner[i].date}
        </div>
        <div class="daily-winner-content-match-between">
          <div class="team-image">
            <img src="${dailyWinner[i].first_team.imageSrc}" />
            <p>${dailyWinner[i].first_team.name}</p>
          </div>
          <p style="margin-bottom: 4rem">vs</p>
          <div class="team-image">
            <img src="${dailyWinner[i].second_team.imageSrc}" />
            <p>${dailyWinner[i].first_team.name}</p>
          </div>
        </div>
        <div class="result">
          <p>${dailyWinner[i].result.team}</p>
          <p>${dailyWinner[i].result.runs}</p>
          <button style="font-size:1.2rem" onclick="openWinnerModal()">View Winners List</button>
        </div>
        </div>`;
    }
  }

  dailyWinnerTable.insertAdjacentHTML("beforeend", winnerNode);
}

function showMore() {
  if (show === "less") {
    const matches = document.querySelectorAll(".daily-winner-content");
    matches.forEach((node) => (node.style.display = "flex"));
    show = "more";
  } else {
    const matches = document.querySelectorAll(".daily-winner-content");
    matches.forEach((node, index) =>
      index < 2 ? (node.style.display = "flex") : (node.style.display = "none")
    );
    show = "less";
  }
  console.log(document.querySelector("#match-button"));
  show === "less"
    ? (document.querySelector("#match-button").innerHTML =
        "Show Previous Matches")
    : (document.querySelector("#match-button").innerHTML = "Show Less Matches");
}

createDailyWinner();
