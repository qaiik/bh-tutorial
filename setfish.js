let hack = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;

let iframe = document.createElement("iframe")
iframe.style.visibility = "hidden"
document.body.appendChild(iframe)

const prompt = iframe.contentWindow.prompt.bind(window);
iframe.remove()

let amount = Number(prompt("Amount"))
hack.stateNode.setState({
  weight: amount,
  weight2: amount
})

hack.alternate.stateNode.setState({
  weight: amount,
  weight2: amount
})

