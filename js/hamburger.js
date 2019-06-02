(function() {
    document.querySelector('.hamburger').addEventListener('click', (e) => {
        let links = document.querySelector('.links');
        let linksDisplay = window.getComputedStyle(links);
        if(linksDisplay['display'] == "none"){
            links.style.display = "block";
        }
        else{
            links.style.display = "none";
        }
    });
 })();