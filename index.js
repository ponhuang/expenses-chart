"use strict";

const ctx = document.querySelector(".chart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        data: [17.45, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    xAxes: [
      {
        gridLines: {
          display: false,
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
});
