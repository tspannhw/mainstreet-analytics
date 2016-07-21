import React, { Component } from 'react';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';

const GoogleTrends = (props) => {
  console.log('Google Trends Component ', props.googleTrendsData);

  if (!props.googleTrendsData) {
    return <div>Loading...</div>
  }

  let chartData = [100, 20, 67, 80];
  //
  // d3.select("svg")
  //   .append("circle")
  //     .attr("cx", 20)
  //     .attr("cy", 20)
  //     .attr("r", 30);

  return (
    <div className="google-trends-chart">
      Google Trends Data Here
      <Sparklines data={chartData} width={180} height={120}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
}

export default GoogleTrends;
