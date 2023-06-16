var array_pu = ["Ele1","Ele2","Ele3","Ele4"];
var arrayContainer_pu = document.getElementById("arrayContainer_pu");
function renderArray_pu() {
    arrayContainer_pu.innerHTML = "";

    var arrayText = "[" + array_pu.join(", ") + "]";
    arrayContainer_pu.textContent = arrayText;
}
renderArray_pu();
var addButton_pu = document.getElementById("addButton_pu");
addButton_pu.addEventListener("click", function() {
    var contentInput_pu = document.getElementById("contentInput_pu");
    var newContent_pu = contentInput_pu.value.trim();

    if (newContent_pu) {
        array_pu.push(newContent_pu);
        contentInput_pu.value = "";
        renderArray_pu();
    }
});


var array_p = ["Ele1","Ele2","Ele3","Ele4"];
var arrayContainer_p = document.getElementById("arrayContainer_p");
function renderArray_p() {
    arrayContainer_p.innerHTML = "";

    var arrayText = "[" + array_p.join(", ") + "]";
    arrayContainer_p.textContent = arrayText;
}
renderArray_p();
var addButton_p = document.getElementById("addButton_p");
addButton_p.addEventListener("click", function() {
        array_p.pop();
        renderArray_p();
});
