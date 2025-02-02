
let kim = false;


function toggleContrast() {
       kim = !kim;
    if(kim)
       {document.body.classList += " js-dark-theme"}
    else {
        document.body.classList.remove("js-dark-theme")
    }



}


