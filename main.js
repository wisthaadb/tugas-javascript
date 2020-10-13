function setDisplay(idName, displayValue) {
    var item = document.getElementById(idName);
    item.style.display = displayValue;

  }
  
  function displayHome() {
    setDisplay("home", "block");
    setDisplay("workex", "none");
    setDisplay("edu", "none");
    setDisplay("info", "none");
    setDisplay("certificates", "none");
    setDisplay("gallery", "none");
  }
  
  function displayWorkex() {
    setDisplay("home", "none");
    setDisplay("workex", "block");
    setDisplay("edu", "none");
    setDisplay("info", "none");
    setDisplay("certificates", "none");
    setDisplay("gallery", "none");
  }
  
  function displayEdu() {
    setDisplay("home", "none");
    setDisplay("workex", "none");
    setDisplay("edu", "block");
    setDisplay("info", "none");
    setDisplay("certificates", "none");
    setDisplay("gallery", "none");
  }
  function displayInfo() {
    setDisplay("home", "none");
    setDisplay("workex", "none");
    setDisplay("edu", "none");
    setDisplay("info", "block");
    setDisplay("certificates", "none");
    setDisplay("gallery", "none");
  }
  function displayCertificates() {
    setDisplay("home", "none");
    setDisplay("workex", "none");
    setDisplay("edu", "none");
    setDisplay("info", "none");
    setDisplay("certificates", "block");
    setDisplay("gallery", "none");
  }
  function displayGallery() {
    setDisplay("home", "none");
    setDisplay("workex", "none");
    setDisplay("edu", "none");
    setDisplay("info", "none");
    setDisplay("certificates", "none");
    setDisplay("gallery", "block");
  }