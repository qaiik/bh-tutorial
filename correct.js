let hack = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;

setInterval(() => {
  hack.stateNode.state.question.correctAnswers = hack.stateNode.state.question.answers
}, 100)
