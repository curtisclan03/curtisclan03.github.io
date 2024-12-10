function newp(var1) {
  document.getElementById("P_homie").style.display = "none"
  document.getElementById("P_us").style.display = "none"
  document.getElementById("P_search").style.display = "none"
  document.getElementById("P_sell").style.display = "none"
  document.getElementById("P_contact").style.display = "none"
  document.getElementById("P_BA").style.display = "none"
  document.getElementById(var1).style.display = "block"
}

function minimenu() {
  document.getElementById("MenuDropdown").classList.toggle("showmenu")
}

function getvalue() {
thevalue = document.getElementById('myinput').value
document.getElementById('valuediv').textContent = 'Results Pending For "' + thevalue + '"'
}
