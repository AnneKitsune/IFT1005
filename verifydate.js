function verifyDate() {
  var now = new Date();
  var selected = new Date(document.getElementById("myDateArrivee").value);
  var valid = selected >= now;
  if(valid){
    document.getElementById("dateerr").hidden = true;
  } else {
    document.getElementById("dateerr").hidden = false;
  }
  return valid;
}