let input = document.getElementById("inputField"); // input field
let img = document.getElementById("ImgField");  // image field
function changeTheme(){ // change theme function
    let text = input.value; // input field value
    if (text === "Light") { // if input field value is Light
        img.style.backgroundImage ="url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')"; // light theme background image
    } 
    else if (text === "Dark") { // if input field value is Dark
        img.style.backgroundImage ="url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')"; // dark theme background image
    }
}