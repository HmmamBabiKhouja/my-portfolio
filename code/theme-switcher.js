//identify the toggle switch HTML element
const toggleSwitch = document.querySelector("#theme-switcher-button");
let themeLight=true;

//listener for changing themes
toggleSwitch.addEventListener("click",()=>{
    if (themeLight) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        themeLight = false;
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        themeLight=true;
    }
});
