import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getAverageScore } from "../../../Functions/users";

// redux
import { useSelector } from "react-redux";

const Chart = () => {
  const [chart, setChart] = useState("");
  const [chart2, setChart2] = useState("");
  // console.log("chart", chart[0].average_score);

  var charts1 = [];
  for (let i = 0; i < chart.length; i++) {
    charts1.push(chart[i].score1);
  }

  var charts2 = [];
  for (let i = 0; i < chart.length; i++) {
    charts2.push(chart[i].score2);
  }

  console.log("charts1", charts1);
  console.log("charts2", charts2);

  var data1 = [];
  for (let i = 0; i < chart.length; i++) {
    let n = chart[i].createdAt;
    data1.push(n);
  }

  var data2 = [];
  for (let i = 0; i < chart.length; i++) {
    let n = chart[i].createdAt;
    data2.push(n);
  }

  const { user } = useSelector((state) => ({ ...state }));
  console.log("user => ", user);
  const [email, setEmail] = useState([user.email]);

  useEffect(() => {
    loadAverageScore();
  }, []);

  const loadAverageScore = () => {
    getAverageScore(user.token, email)
      .then((res) => {
        setChart(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const data = {
    labels: data1,
    datasets: [
      {
        label: "คะแนนแบบประเมินความเครียดก่อนทำกิจกรรม",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: charts1,
      },
      {
        label: "คะแนนแบบประเมินความเครียดหลังทำกิจกรรม",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(166, 255, 0,0.4)",
        borderColor: "rgba(166, 255, 0,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: charts2,
        // data: [5, 30],
      },
    ],
  };
  return (
    <div>
      <br />
      <br />

      <Line data={data} />
    </div>
  );
};

export default Chart;
