function solve() {
  let inputStrElement = document.getElementById('str');
  let inputTextElement = document.getElementById('text');
  let outputElement = document.getElementById('result');

  let pattern = /(north|east)(?:[\s\S])*?([\d]{2})(?:[^,]+)*?,(?:[^,])*?([\d]{6})/gmi;
  let matches = inputTextElement.value.match(pattern);
  let matchedInfo = [];

  if (matches.length > 0) {
    matches.forEach((match) => {
      pattern = /(north|east)(?:[\s\S])*?([\d]{2})(?:[^,]+)*?,(?:[^,])*?([\d]{6})/gmi;
      let result = pattern.exec(match);

      if (result.length > 1) {
        matchedInfo.push(result.slice(1, 4).join(" "));
      }
    });
  } else {
    return;
  }

  let northCoords = takeRightCoords('NORTH');
  let eastCoords = takeRightCoords('EAST');

  let message = inputTextElement.value.split(inputStrElement.value)[1];

  appendToTheFather(`${northCoords[1]}.${northCoords[2]} ${northCoords[0][0]}`);
  appendToTheFather(`${eastCoords[1]}.${eastCoords[2]} ${eastCoords[0][0]}`);
  appendToTheFather(`Message: ${message}`);
  
  function takeRightCoords(rightWay) {

    console.log(matchedInfo);
    return matchedInfo
      .reverse()
      .map((coords) => coords.toUpperCase())
      .filter((coordsInfo) => coordsInfo
      .includes(rightWay))[0].split(' ');
  }

  function appendToTheFather(text){
    let p = document.createElement('p');
    p.textContent = text;
    outputElement.appendChild(p);
  }

  inputStrElement.value = "";
  inputTextElement.value = "";
}