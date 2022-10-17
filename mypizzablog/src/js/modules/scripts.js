
export function myFunction() {
    window.onclick = function(event) {
        document.getElementById("dropdown").classList.toggle("show");
        if (!event.target.matches('.btn-bars')) {
        
            var dropdowns = document.getElementsByClassName("header__dropdown");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }
    }
}


 


