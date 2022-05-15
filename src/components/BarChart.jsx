import React from "react";
import * as d3 from "d3";
import { useD3 } from "../hooks/useD3";
import "../styles/ChartStyles.css";
const BarChart = ({ data }) => {
  const sample = data[1];
  const { title, y_axis, year } = data[0];
  console.log(title);

  const ref = useD3((svg) => {
    const margin = 80;
    const width = 1000 - 2 * margin;
    const height = 600 - 2 * margin;

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(sample.map((s) => s.language))
      .padding(0.4);

    const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

    // vertical grid lines
    const makeXLines = () => d3.axisBottom().scale(xScale);

    const makeYLines = () => d3.axisLeft().scale(yScale);

    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append("g").call(d3.axisLeft(yScale));

    // vertical grid lines
    chart
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0, ${height})`)
      .call(makeXLines().tickSize(-height, 0, 0).tickFormat(""));

    chart
      .append("g")
      .attr("class", "grid")
      .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

    const barGroups = chart.selectAll().data(sample).enter().append("g");

    barGroups
      .append("rect")
      .attr("class", "bar")
      .attr("x", (g) => xScale(g.language))
      .attr("y", (g) => yScale(g.value))
      .attr("height", (g) => height - yScale(g.value))
      .attr("width", xScale.bandwidth())
      .on("mouseenter", function (actual, i) {
        d3.selectAll(".value").attr("opacity", 0);
        //displaying percentage
        barGroups
          .append("text")
          .attr("class", "value")
          .attr("x", (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr("y", (a) => yScale(a.value) + 30)
          .attr("text-anchor", "middle")
          .text((a) => `${a.value}%`);

        d3.select(this)
          .transition()
          .duration(300)
          .attr("opacity", 0.6)
          .attr("x", (a) => xScale(a.language) - 5)
          .attr("width", xScale.bandwidth() + 10);
      })
      .on("mouseleave", function () {
        d3.selectAll(".value").attr("opacity", 1);

        d3.select(this)
          .transition()
          .duration(300)
          .attr("opacity", 1)
          .attr("x", (a) => xScale(a.language))
          .attr("width", xScale.bandwidth());

        chart.selectAll(".value").remove();
      });

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -(height / 2) - margin)
      .attr("y", margin / 2.4)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text(`${y_axis} (%)`);

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", width / 2 + margin)
      .attr("y", height + margin * 1.7)
      .attr("text-anchor", "middle")
      .text("Languages");

    svg
      .append("text")
      .attr("class", "title")
      .attr("x", width / 2 + margin)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text(`${title}`);

    svg
      .append("text")
      .attr("class", "source")
      .attr("x", width - margin / 2)
      .attr("y", height + margin * 1.7)
      .attr("text-anchor", "start")
      .text(`Source: Stack Overflow, ${year}`);
  });

  return (
    <div className="svg__container">
      <svg ref={ref}>
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default BarChart;
