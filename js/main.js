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
        data: [60,100,170,125,225,200,100],
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

let send = document.getElementsByClassName("send")[0];

send.addEventListener("onsubmit", successmessage);

function successmessage() {
    var p = document.createElement("P");
    p.className = "success-message";
    var t = document.createTextNode("Your message was sent successfully!");
    p.appendChild(t);
    document.body.appendChild(p);
    document.getElementsByClassName("message-user")[0].appendChild(p);
}

// SAVE MESSAGE

let save = document.getElementsByClassName("save")[0];

save.addEventListener("click", successmessage);

function successmessage() {
    var p = document.createElement("P");
    p.className = "success-message";
    var t = document.createTextNode("Saved correctly");
    p.appendChild(t);
    document.body.appendChild(p);
    document.getElementsByClassName("settings")[0].appendChild(p);
    setTimeout(function(){
         document.getElementsByClassName("success-message")[0].innerHTML="";
    },2000);
}
