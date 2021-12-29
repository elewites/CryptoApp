//libraries
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

//styling
import "./styling/chart.css";

//components
import { Context } from "../Helpers/Context";
import { parseTimeStampFunction } from "./ChartHelperFunctions";

function Chart() {
  //global states
  const { currency, isDarkMode } = useContext(Context);

  //parameters stored in route
  const { id } = useParams();

  //state where prices for a coin are stored
  const [prices, setPrices] = useState(null);

  const API_DATA_URL = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=7`;

  //fetching data from API
  useEffect(() => {
    axios.get(API_DATA_URL).then((response) => {
      console.log(response.data.prices);
      setPrices(response.data.prices);
    });
  }, [API_DATA_URL]);

  //accessors to get data from prices and plot them in xychart
  const accessors = {
    xAccessor: (d) => d[0],
    yAccessor: (d) => d[1].toFixed(2),
  };

  //EFFECTS: if currency is usd, returns dollar sign, returns euro sign otherwise
  const setDisplayCurr = () => {
    return currency === "usd" ? "$" : "€";
  };

  //EFFECTS: returns white hex color if isDarkMode is true,
  //        s returns black hex color otherwise
  const fill = () => {
    if (isDarkMode) {
      return "#fff";
    } else {
      return "#000000";
    }
  };

  //EFFECTS: returns 1 if isDarkMode is true, returns 2 otherwise
  // used to set stroke width in animated grid component
  const strokeWidth = () => {
    if (isDarkMode) {
      return 1;
    } else {
      return 2;
    }
  };

  //EFFECTS: returns opacity based on isDarkMode
  const chooseOpacity = () => {
    if (isDarkMode) {
      return 0.2;
    } else {
      return 1;
    }
  };

  if (prices) {
    return (
      <div className="chart-container">
        <XYChart
          height={500}
          xScale={{ type: "time" }}
          yScale={{ type: "log" }}
        >
          <AnimatedAxis
            orientation="bottom"
            hideAxisLine
            numTicks={7}
            tickLength={10}
            tickLabelProps={() => ({ fill: fill() })}
          />
          <AnimatedAxis
            className="y-axis"
            orientation="left"
            hideAxisLine
            hideTicks
            tickLabelProps={() => ({ fill: fill() })}
            tickFormat={(v) => "$" + v}
          />
          <AnimatedGrid
            columns={false}
            rows={true}
            lineStyle={{
              stroke: "#e7e7e7",
              opacity: chooseOpacity(),
              strokeLinecap: "round",
              strokeWidth: strokeWidth(),
            }}
            strokeDasharray="0, 4"
          />
          <AnimatedLineSeries
            dataKey="Price"
            data={prices}
            {...accessors}
            stroke={isDarkMode ? "#7cb6ece3" : "#7cb5ec"}
          />
          <Tooltip
            className={isDarkMode ? "t t-dark" : "t"}
            snapTooltipToDatumX
            snapTooltipToDatumY
            showVerticalCrosshair
            showSeriesGlyphs
            renderTooltip={({ tooltipData }) => (
              <div className="tooltip-container">
                <div className="tooltip-date">
                  {parseTimeStampFunction(
                    accessors.xAccessor(tooltipData.nearestDatum.datum)
                  )}
                </div>
                <div className="tooltip-price">
                  <p className="bold-label">{tooltipData.nearestDatum.key}:</p>
                  <p className="price-display">
                    {setDisplayCurr()}
                    {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                  </p>
                </div>
              </div>
            )}
          />
        </XYChart>
      </div>
    );
  } else {
    return null;
  }
}

export default Chart;
