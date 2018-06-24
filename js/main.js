//Notifications

let x = document.getElementsByClassName("remove")[0];
let alertContainer = document.getElementsByClassName("alert-container")[0];
let notificationBadge = document.getElementsByClassName("badge")[0];

x.addEventListener("click", removediv);

function removediv() {
  alertContainer.style.display = 'none';
  notificationBadge.classList.remove("badge");
}

//Traffic Graph

const lineChart = document.getElementById("trafficChart");
let trafficChart = new Chart(lineChart, {
  type: 'line',
  data: {
      labels: ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
      datasets: [{
          data: [750,1400,1000,1500,2000,1500,1750,1250,1750,2250,1750,2400],
          label: "Visits",
          borderColor: "#4863A0",
          fill: true,
          pointBackgroundColor: "#4863A0",
          pointBorderWidth: "5",
          backgroundColor: "#8EA9E6",
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Website traffic data'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 500,
          }
        }]
      },
      tooltips: {
        xPadding: 10,
        yPadding: 10,
        displayColors: false,
      },
    }
  });

// DAILY TRAFFIC

new Chart(document.getElementById("dailyTraffic"), {
    type: 'bar',
    data: {
    labels: ["MON","TUE","WED","THU","FRI","SAT","SUN"],
    datasets: [{
        data: [170,210,280,235,235,310,210],
        backgroundColor: ["#4863A0","#4863A0","#4863A0","#4863A0","#4863A0","#8EA9E6","#8EA9E6"],
      }]
    },
    options: {
    legend: { display: false },
    tooltips: {
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 50,
        }
      }]
    },
  },
});

// Mobile users

new Chart(document.getElementById("mobileChart"), {
    type: 'doughnut',
    data: {
      labels: ["Mobile", "Tablet", "Desktop"],
      datasets: [
        {
          label: "Mobile Users",
          backgroundColor: ["#4863A0","#FF862B","#8EA9E6"],
          data: [73,6,21]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Mobile Users',
      },
      legend: {
        position: 'right',
        labels: {
          padding: 15,
        }
      },
      tooltips: {
        xPadding: 10,
        yPadding: 10,
        displayColors: false,
      }
    }
});

// SUCCESS MESSAGE

let send = document.getElementById("message-form");
send.addEventListener("submit", successmessage);

function successmessage(e) {
    e.preventDefault();
    var p = document.createElement("P");
    p.id = "success-message";
    var t = document.createTextNode("Your message was sent successfully!");
    p.appendChild(t);
    document.body.appendChild(p);
    document.getElementById("message-form").appendChild(p);
    setTimeout(function(){
      //document.getElementById("success-message").innerHTML="";
      //var element = document.getElementById("success-message");
      $("#success-message").remove();
    },2000);
}

// function successmessage(e) {
//     e.preventDefault();
//     var p = document.createElement("P");
//     p.className = "success-message";
//     var t = document.createTextNode("Your message was sent successfully!");
//     p.appendChild(t);
//     document.body.appendChild(p);
//     document.getElementsByClassName("message-user")[0].appendChild(p);
//     setTimeout(function(){
//       document.getElementsByClassName("success-message")[0].innerHTML="";
//     },2000);
// }

// SAVE MESSAGE

let save = document.getElementById("settings");
save.addEventListener("submit", successmessage2);

function successmessage2(e) {
    e.preventDefault();
    var p = document.createElement("P");
    p.id = "success-message";
    var t = document.createTextNode("Saved correctly");
    p.appendChild(t);
    document.body.appendChild(p);
    document.getElementById("settings").appendChild(p);
    setTimeout(function(){
         $("#success-message").remove();;
    },2000);
}

// LOCAL STORAGE

// if (localStorage) {
// 	// Browser supports it
// 	// DOM Ready
// 	$(function() {
// 		// Insert new buttons (you'd probably not ACTUALLY use buttons, instead saving on blurs or every x seconds)
// 		$("#saveForm")
// 			.after("<input type='submit' value='Save Form' id='saveData'>")
// 			.after("<input type='submit' value='Clear Saved Data' id='clearData'>");
// 		$("#saveData")
// 			.click(function(e) {
// 				// Don't actually submit form
// 				e.preventDefault();
// 				// Bit of generic data to test if saved data exists on page load
// 				localStorage.setItem("flag", "set");
// 				// serializeArray is awesome and powerful
// 				var data = $("#settings").serializeArray();
// 				// iterate over results
// 				$.each(data, function(i, obj) {
// 					// HTML5 magic!!
// 					localStorage.setItem(obj.name, obj.value);
// 				});
// 			});
// 		// Test if there is already saved data
// 		if (localStorage.getItem("flag") == "set") {
// 			// Tell the user
// 			$("header").before("<p id='message'>This form has saved data!</p>");
// 			// Same iteration stuff as before
// 			var data = $("#settings").serializeArray();
// 			// Only the only way we can select is by the name attribute, but jQuery is down with that.
// 			$.each(data, function(i, obj) {
// 				$("[name='" + obj.name +"']").val(localStorage.getItem(obj.name));
// 			});
// 		}
// 		// Provide mechanism to remove data. You'd probably actually remove it not just kill the flag
// 		$("#clearData")
// 			.click(function(e) {
// 				e.preventDefault();
// 				localStorage.setItem("flag", "");
// 			});
// 	});
// }
