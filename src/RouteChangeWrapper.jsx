import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";

function RouteChangeWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    const titleMap = {
      "/": "Home | Sort Visualizer - v3 ",
      "/bubble": "Bubble Sort | Sort Visualizer - v3 ",
      "/selection": "Selection Sort | Sort Visualizer - v3 ",
      "/insertion": "Insertion Sort | Sort Visualizer - v3 ",
      "/merge": "Merge Sort | Sort Visualizer - v3 ",
      "/quick": "Quick Sort | Sort Visualizer - v3 ",
      "/racemode": "Race Mode | Sort Visualizer - v3 ",
    };

    document.title = titleMap[path] || "Sort Visualizer";
  }, [location]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && children}
    </div>
  );
}

export default RouteChangeWrapper;
