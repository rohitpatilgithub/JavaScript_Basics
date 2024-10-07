const thisClick = document.getElementById("zodiac");

const bod = document.body.style;

const getValue = () => {
    switch(thisClick.value) {
        case "aries":
            // document.body.style.backgroundColor = "red"  
            // instead of document.... assign and store document.body         
            bod.backgroundColor = "red"
            break;
        case "tarus":
            // document.body.style.backgroundColor = "red"  
            // instead of document.... assign and store document.body         
            bod.backgroundColor = "gray"
            break;
        case "gemini":
            // document.body.style.backgroundColor = "red"  
            // instead of document.... assign and store document.body         
            bod.backgroundColor = "pink"
            break;
        case "cancer":
            // document.body.style.backgroundColor = "red"  
            // instead of document.... assign and store document.body         
            bod.backgroundColor = "violet"
            break;
        default:
        break;
    }
}