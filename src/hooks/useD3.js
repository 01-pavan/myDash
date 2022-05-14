import React from "react";
import * as d3 from "d3";

export const useD3 = (renderChartFn) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    //eslint-disable-next-line
  }, []);
  return ref;
};
