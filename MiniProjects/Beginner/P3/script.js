const input = document.getElementById("intext");

let newText;

const getVal = () => {
    newText = String(input.value);
    return newText;
}

const generateText = () => {
    const inputValue = getVal();

    const para = document.createElement("p");

    para.innerText = `Hi ${inputValue}, Good Afternoon !`;

    para.setAttribute("class" , "paras")
 
    document.body.append(para)
}