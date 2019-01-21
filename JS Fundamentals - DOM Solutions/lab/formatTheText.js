function solve() {
let text = document.getElementById('input').textContent.split(".").filter(r => r.length > 0);
let output = document.getElementById('output');
let paragraphs;

if(text.length > 0){
    paragraphs = text.length <= 3 ? 1 : text.length / 3; } for(let i=0, p=0; i < paragraphs; i++, p+=3){ let currentP=document.createElement('p');
    currentP.textContent=text.slice(p, (p + 3)).join(".") + "." ; output.appendChild(currentP);
}
}