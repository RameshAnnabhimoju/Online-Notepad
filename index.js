let featureFlag = document.querySelector("#feature-flag");
let textArea = document.querySelector("#textarea");

setInterval(() => {
    if (featureFlag.checked == true) {
        localStorage.setItem("autosave-data", textArea.value);
    }
}, 1000)


let fromLocal = localStorage.getItem("autosave-data");
if (fromLocal !== null) {
    textArea.value = fromLocal;
}