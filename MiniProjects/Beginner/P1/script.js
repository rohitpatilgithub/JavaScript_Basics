const thisBtns = document.querySelectorAll("button");

const getContainer = document.querySelector(".container");

const input = document.getElementById("numOfWords");

let numOfWords;

const createWords = () => {
    const alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

const generatePara = () => {
    numOfWords = Number(input.value);

    const para = document.createElement("p");

    para.innerText = "New Para";

    para.setAttribute("class" , "paras")

    getContainer.append(para)

    console.log("click")
}

thisBtns[0].onclick = generatePara;