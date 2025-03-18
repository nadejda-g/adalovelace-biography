const timer = document.getElementById('timer');
const birthDate = new Date("12-10-1815");
const intlNumberFormatter = new Intl.NumberFormat("en-US")

function updateTime () {
    const now = new Date();
    const differenceInSeconds = Math.floor((now.getTime() - birthDate.getTime()) / 1000);
    timer.innerHTML = intlNumberFormatter.format(differenceInSeconds);
}
updateTime();
setInterval(updateTime, 1000);

const img1 = document.getElementById("program-picture");
const img2 = document.getElementById("engine-machine");
const img3 = document.getElementById("ada-language");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");

function showSkillsInfo (image, arrow) {
    if (image.style.display === "block") {
        image.style.display = "none"
        arrow.style.transform = "rotate(0deg)";
    } else {
        image.style.display = "block"
        arrow.style.transform = "rotate(90deg)";
    }
}

function showProgram () {
    showSkillsInfo(img1, arrow1);
}