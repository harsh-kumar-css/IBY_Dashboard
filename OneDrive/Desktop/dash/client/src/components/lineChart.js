import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import "./styles.css";
import io from "socket.io-client";
import useStyles from "./../appStyles";
import { AppBar, Typography, Container, Card, Paper } from "@material-ui/core";
import happimg from "./images/happy.jpg";
import sadimg from "./images/sad.jpg";
import neutralimg from "./images/neutral.jpg";
import angryimg from "./images/angry.jpg";
import disgustimg from "./images/disgust.jpg";
import fearimg from "./images/fear.jpg";
import surimg from "./images/surprise.jpg";
import moment from "moment";

const Chart = require("react-chartjs-2").Chart;

const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"],
});

socket.on("connect", () => {
  console.log(socket.id);
});

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const color = Chart.helpers.color;
let happy = 0,
  sad = 0,
  neutral = 0,
  surprise = 0,
  fear = 0,
  angry = 0,
  disgust = 0,
  count = 0,
  sumHappy = 0,
  sumSad = 0,
  sumNeutral = 0,
  sumSurprise = 0,
  sumFear = 0,
  sumAngry = 0,
  sumDisgust = 0,
  maxx = 0;
let id = "one1";

socket.on("set", (val) => {
  maxx = 0;
  happy = val.happy;
  sad = val.sad;
  neutral = val.neutral;
  surprise = val.surprise;
  fear = val.fear;
  angry = val.angry;
  disgust = val.disgust;
  sumHappy += happy;
  sumSad += sad;
  sumNeutral += neutral;
  sumSurprise += surprise;
  sumFear += fear;
  sumAngry += angry;
  sumDisgust += disgust;
  count++;
  document.getElementById(id).style.color = "black";
  if (maxx < sumHappy / count) {
    id = "one1";
    maxx = sumHappy / count;
  }
  if (maxx < sumSad / count) {
    id = "one2";
    maxx = sumSad / count;
  }
  if (maxx < sumNeutral / count) {
    id = "one3";
    maxx = sumNeutral / count;
  }
  if (maxx < sumSurprise / count) {
    id = "one4";
    maxx = sumSurprise / count;
  }
  if (maxx < sumFear / count) {
    id = "one5";
    maxx = sumFear / count;
  }
  if (maxx < sumAngry / count) {
    id = "one6";
    maxx = sumAngry / count;
  }
  if (maxx < sumDisgust / count) {
    id = "one7";
    maxx = sumDisgust / count;
  }
  document.getElementById("one1").textContent = `${(sumHappy / count) * 100} %`;
  document.getElementById("one2").textContent = `${(sumSad / count) * 100} %`;
  document.getElementById("one3").textContent = `${
    (sumNeutral / count) * 100
  } %`;
  document.getElementById("one4").textContent = `${
    (sumSurprise / count) * 100
  } %`;
  document.getElementById("one5").textContent = `${(sumFear / count) * 100} %`;
  document.getElementById("one6").textContent = `${(sumAngry / count) * 100} %`;
  document.getElementById("one7").textContent = `${
    (sumDisgust / count) * 100
  } %`;
  document.getElementById(id).style.color = "red";
});

const data = {
  datasets: [
    {
      label: "happy",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.red,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
    {
      label: "sad",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.orange,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
    {
      label: "neutral",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.yellow,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
    {
      label: "surprise",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.green,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
    {
      label: "fear",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.blue,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
    {
      label: "angry",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.purple,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
    {
      label: "disgust",
      backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
      borderColor: chartColors.grey,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
  ],
};

const options = {
  elements: {
    line: {
      tension: 0.5,
    },
  },
  scales: {
    xAxes: [
      {
        type: "realtime",
        distribution: "linear",
        realtime: {
          onRefresh: function (chart) {
            const x = moment();
            chart.data.datasets[0].data.push({
              x: x,
              y: happy,
            });
            chart.data.datasets[1].data.push({
              x: x,
              y: sad,
            });
            chart.data.datasets[2].data.push({
              x: x,
              y: neutral,
            });
            chart.data.datasets[3].data.push({
              x: x,
              y: surprise,
            });
            chart.data.datasets[4].data.push({
              x: x,
              y: fear,
            });
            chart.data.datasets[5].data.push({
              x: x,
              y: angry,
            });
            chart.data.datasets[6].data.push({
              x: x,
              y: disgust,
            });
          },
          delay: 3000,
          time: {
            displayFormat: "h:mm",
          },
        },
        ticks: {
          displayFormats: 1,
          maxRotation: 0,
          minRotation: 0,
          stepSize: 1,
          maxTicksLimit: 20,
          minUnit: "second",
          source: "auto",
          autoSkip: true,
          callback: function (value) {
            return moment(value, "HH:mm:ss").format("HH:mm:ss");
          },
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 1,
        },
      },
    ],
  },
};

const LineChart = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card className={classes.graph}>
        <div className={classes.chart}>
          <Line data={data} options={options} />
        </div>
      </Card>
      <Card className={classes.details} id="detail">
        <Paper className={classes.val}>
          <img src={happimg} className={classes.logo}></img>
          <h4 id="one1" className={classes.values}>
            {0}
          </h4>
        </Paper>
        <Paper className={classes.val}>
          <img src={sadimg} className={classes.logo}></img>
          <h4 id="one2" className={classes.values}>
            {0}
          </h4>
        </Paper>
        <Paper className={classes.val}>
          <img src={neutralimg} className={classes.logo}></img>
          <h4 id="one3" className={classes.values}>
            {0}
          </h4>
        </Paper>
        <Paper className={classes.val}>
          <img src={surimg} className={classes.logo}></img>
          <h4 id="one4" className={classes.values}>
            {0}
          </h4>
        </Paper>
        <Paper className={classes.val}>
          <img src={fearimg} className={classes.logo}></img>
          <h4 id="one5" className={classes.values}>
            {0}
          </h4>
        </Paper>
        <Paper className={classes.val}>
          <img src={angryimg} className={classes.logo}></img>
          <h4 id="one6" className={classes.values}>
            {0}
          </h4>
        </Paper>
        <Paper className={classes.val}>
          <img src={disgustimg} className={classes.logo}></img>
          <h4 id="one7" className={classes.values}>
            {0}
          </h4>
        </Paper>
      </Card>
    </div>
  );
};

export default LineChart;
