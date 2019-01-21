function solve(){
  Array.from(document.getElementsByTagName('a')).forEach(a => {
                a.addEventListener('click', () => {
                   let span = a.parentNode.children[1];
                   let visitedCounter = +span.textContent.split(' ')[1] + 1;
                   
                   span.textContent = `Visited: ${visitedCounter} times`;
                });
            });
}