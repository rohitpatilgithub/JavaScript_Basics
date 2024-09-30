// tag name 'span' : inner text 'are' , 'color' : black , ' bg : yellow'
const bySpanTag = document.getElementsByTagName("span");
bySpanTag[0].innerText = "are";
bySpanTag[0].style.backgroundColor = "#66B2FF";

// selection of element & manipulating buttons

const thisBtns = document.querySelectorAll("button");

// for 1st btn 
thisBtns[0].innerText = "Click Me";
thisBtns[0].style.fontFamily = "times"
thisBtns[0].style.fontStyle = "Italic"
thisBtns[0].style.borderColor = "White"


// for 2nd btn 
thisBtns[1].innerText = "Delete";
thisBtns[1].style.fontFamily = "times"
thisBtns[1].style.fontStyle = "Italic"
thisBtns[1].style.borderColor = "White"

// selection of class & manipulating it
const selectClass = document.querySelector(".thisClass");
selectClass.innerText = "can"

// get attribute ( what object we are manipulating )
console.log("Before manipulating : " + selectClass.getAttribute("class"));

// set attribute ( manipulating the attribute )
selectClass.setAttribute("class","newselectClass");
console.log("After manipulating : " + selectClass.getAttribute("class"))

// function calls

thisBtns[0].onclick = bringMeHeading;
thisBtns[1].onclick = deleteHeading;

function bringMeHeading() {
    const head = document.createElement("h2");
    head.innerText = "𝖧𝗈𝗉𝖾";
    document.body.append(head);
    console.log("click")
}

function deleteHeading() {
    const head = document.querySelector("h2");
    head.remove();
    console.log("unclick")
}
