function spin() {
    setTimeout(() => {
        for (sec of ["header", "main", "footer"]) {
            document.querySelector(sec).style.display = "block";
        }
        document.querySelector(".spinner").style.display = "none";
    }, 3000);
}

document.onloadeddata = spin();


function protectImageDownload() {
    document.querySelectorAll("img").forEach(element => {
        element.setAttribute("onContextMenu", "return false;");
    });    
}

protectImageDownload();