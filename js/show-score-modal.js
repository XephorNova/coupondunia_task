function submitPop() {
  const team = document.querySelector('input[name="team"]:checked').value;
  const match_date = document.getElementById("match_date").value;
  const score = document.getElementById("runs").value;
  const modalScoreTag = document.getElementById("modal-score");
  modalScoreTag.innerHTML = `You predicted <b>${team}</b> as the winning team & ${score} runs as the winning score`;
  document.getElementById("scoreModal").style.display = "block";
}

function submitScore() {
  const team = document.querySelector('input[name="team"]:checked').value;
  const match_date = document.getElementById("match_date").value;
  const score = document.getElementById("runs").value;
  fetch("POST", {
    body: JSON.stringify({
      "match-date": match_date,
      "selected-team": team,
      "predicted-runs": score,
    }),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      document.getElementById("scoreModal").style.display = "none";
      document.getElementById(
        "predication"
      ).innerHTML = `<strong>Your Prediction: </strong><span style="color:red;"> Winning team <strong>${team}</strong> to score <strong>${score} Runs</strong> </span>`;
    });
}
