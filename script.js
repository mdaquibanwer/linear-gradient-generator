const colorInputs = document.querySelectorAll(".colors input"),
gradientBox = document.querySelector(".gradient-box"),
selectBoxMenu = document.querySelector(".select-box select"),
textarea = document.querySelector("textarea"),
refreshBtn = document.querySelector(".refresh"),
copyBtn = document.querySelector(".copy");

const getRandomColor = ()=>{
    // generating a random color in hexa decimal format.
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom)=>{
    if(isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${selectBoxMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}

const copyColorCode = ()=>{
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Color Code Copied";
    setTimeout(() => {
        copyBtn.innerText = "Copy Colors";
    }, 2000);

}

colorInputs.forEach(input=>{
    input.addEventListener("input",()=>generateGradient(false));
})
selectBoxMenu.addEventListener("change",()=>generateGradient(false));

refreshBtn.addEventListener("click",()=>generateGradient(true));
copyBtn.addEventListener("click",copyColorCode);