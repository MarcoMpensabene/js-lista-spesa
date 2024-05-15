const shopList = ["pasta","patate","formaggio","fazzoletti","detersivo","scarpe"];
const ulEl = document.querySelector("ul");
let i = 0;

while(i < shopList.length ){
    const liEl = document.createElement("li")
    liEl.append(shopList[i]);
    ulEl.appendChild(liEl);
    i++;
}
