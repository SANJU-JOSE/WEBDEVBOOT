
  function changeColor(colorP) {
    var color = colorP.value.toLowerCase();
    var optionElement = document.getElementById(color);
    optionElement.style.color = color;
    document.body.style.backgroundColor = color;
};