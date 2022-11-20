let hack = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;
function clearCheckmark() {
  document.querySelector("#feedbackButton > div.styles__container___1-bHf-camelCase").click()
}

function clickcheck() {
  if (document.querySelector("#feedbackButton > div.styles__container___1-bHf-camelCase")) clearCheckmark()
}

function dopowerup() {
  if (document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase")) {
    document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase").click()
    document.querySelector("#app > div > div > div:nth-child(2) > div").click()
  }
}

function next() {
  if (document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__noPlayers___3RV1t-camelCase")) {
    document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__noPlayers___3RV1t-camelCase").click()
  }
}
//answers[0].firstChild.click()
function answer() {
  if (document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__questionContainer___3u_c9-camelCase > div.styles__questionText___2MlSZ-camelCase")) {
    
    let answers = Array.from(document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__answersHolder___3LYNs-camelCase").children)
    let correctAnswer = hack.stateNode.state.question.correctAnswers[0]
    answers.forEach(ae => {
      if (ae.innerText == correctAnswer) {
        ae.firstChild.click()
      }
    })
  }
}

setTimeout = function(f,t) {
  f()
}

setInterval(answer, 20)
setInterval(clickcheck, 20)
setInterval(dopowerup, 20)
setInterval(next, 20)
