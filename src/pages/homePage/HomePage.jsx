import TypedText from "./TypedText";
import styles from "./HomePage.module.css";
import SelectNavigation from "./SelectNavigation";
import ProjectDescription from "./ProjectDescription.jsx";
import BackgroundVideo from "./BackgroundVideo.jsx";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import Feedback from "./Feedback.jsx";

// import data from "../../Data/data.js";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.body}>
      <BackgroundVideo>
        <div className={styles.titleCard}>
          <div className={styles.element}>
            <TypedText>{["Analyze", "Vizualize", "Play"]}</TypedText>
          </div>
          <div className={styles.title}>
            <h1>SORT IT OUT</h1>
          </div>
          <SelectNavigation text={"Algorithm"} />
          <div className={styles.subtitle}>
            Visit{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/racemode")}
            >
              Race Mode{" "}
            </a>{" "}
            | {/* <CircleIcon fontSize="small" /> Visit{" "} */}
            Visit{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              href="https://sort-it-out-v2-achyutananda-sahoo.netlify.app/"
            >
              Version 2
            </a>
          </div>
        </div>
      </BackgroundVideo>
      {/* <div className={styles.content}>
        <div className={styles.cards}>
          {Object.entries(data).map(([key]) => {
            return (
              <Card
                key={key}
                name={data[key].name}
                image={data[key].image}
                description={data[key].description}
                time={data[key].time_complexity.worst}
                space={data[key].space_complexity}
                link={data[key].link}
              />
            );
          })}
        </div>
      </div> */}

      <div className={styles.raceModeSection}>
        <RaceMode />
      </div>
      <ProjectDescription />

      <Feedback />
    </div>
  );
}

function RaceMode() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.raceMode}>
        <div className={styles.raceModeText}>
          <h3>
            <TypedText>{["Check Out RACE MODE 🚀"]}</TypedText>
          </h3>
          <p>
            Ever wondered which sorting algorithm is the fastest? Let them
            compete! In Race Mode, algorithms like Bubble Sort, Merge Sort, and
            Quick Sort go head-to-head on your screen. 🎯 Perfect for visual
            learners and curious coders. Tap in, press start, and learn through
            the thrill of competition.
          </p>
          <button
            className={styles.raceModeButton}
            onClick={() => navigate("/racemode")}
          >
            Visit Race-Mode 🏃
          </button>
        </div>
        <div className={styles.raceModeVideo}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source src="/RACE_MODE.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

function Card({ name, image, description, time, space, link }) {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate(link)}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.complexities}>
        <div className={styles.timeComplexity}>Time : {time}</div>
        <div className={styles.spaceComplexity}>Space : {space}</div>
      </div>
    </div>
  );
}

export default HomePage;
