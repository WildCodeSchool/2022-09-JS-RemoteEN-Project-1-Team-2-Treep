// From script

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

// Timeline Script

const line = document.querySelector(".timeline-innerline");

let a = 0;
let a2 = 1;
let target1 = document.querySelector(".timeline .flex-container");
let target2 = document.querySelectorAll(".timeline .flex-container li");

const timeline_events = document.querySelectorAll(".flex-container li");

function showTime(event) {
  event.setAttribute("done", "true");
  event.querySelector(".timeline-point").style.background = "black";
  event.querySelector(".date").style.opacity = "100%";
  event.querySelector("p").style.opacity = "100%";
  event.querySelector("p").style.transform = "translateY(0px)";
}

function hideTime(event) {
  event.removeAttribute("done");
  event.querySelector(".timeline-point").style.background = "black";
  event.querySelector(".date").style.opacity = "0%";
  event.querySelector("p").style.opacity = "0%";
  event.querySelector("p").style.transform = "translateY(-10px)";
}

function slowLoop() {
  setTimeout(function () {
    showTime(timeline_events[a]);
    timelineProgress(a + 1);
    a++;
    if (a < timeline_events.length) {
      slowLoop();
    }
  }, 500);
}


function timelineProgress(value) {
  let progress = `${(value / timeline_events.length) * 100}%`;
  if (window.matchMedia("(min-width: 728px)").matches) {
    line.style.width = progress;
    line.style.height = "4px";
  } else {
    line.style.height = progress;
    line.style.width = "4px";
  }
}

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.9) {
        if (window.matchMedia("(min-width: 728px)").matches) {
          slowLoop();
        } else {
          showTime(entry.target);
          timelineProgress(a2);
          a2++;
        }
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 1, rootMargin: "0px 0px -50px 0px" }
);

if (window.matchMedia("(min-width: 728px)").matches) {
  observer.observe(target1);
} else {
  target2.forEach((t) => {
    observer.observe(t);
  });
}

