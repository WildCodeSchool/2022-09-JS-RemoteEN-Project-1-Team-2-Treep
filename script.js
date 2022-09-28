function openForm() {

    document.getElementById("popupForm").style.display = "block";
    document.getElementById("treenum").value = "";
    
    thanksbutton = document.getElementById("thanksbutton");
    thanksbutton.addEventListener("click", 
    function thanks(){
      const name = document.getElementById("name").value;
      let treenum = document.getElementById("treenum").value;

        switch(true){
      
      case (treenum == 1):
        document.getElementById("message").innerHTML = `${name}, thank you for giving a tree!`;
        document.getElementById("nametree").value = "";
        break;

      case (treenum > 1):
        document.getElementById("message").innerHTML = `${name}, thank you for giving ${treenum} trees!`;
        document.getElementById("nametree").value = "";
        break;

      default:
        document.getElementById("message").innerHTML = `Invalid Number of Trees, please try again`;
      }

    document.getElementById("popupForm2").style.display = "block";
    document.getElementById("popupForm").style.display = "none";
})};


function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  };


function closeForm2() {
    document.getElementById("popupForm2").style.display = "none";
  };
