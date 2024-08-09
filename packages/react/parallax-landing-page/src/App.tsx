import { useRef } from "react";
import "./App.css";
import { containerCss, sectionTwoCss } from "./App.styles";

import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  console.log(ref);
  console.log(scrollYProgress["current"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["33.33%", "125%"]);
  const rocksFG = useTransform(scrollYProgress, [0, 1], ["15%", "25%"]);
  const rocksBG = useTransform(scrollYProgress, [0, 1], ["13%", "25%"]);
  const hillsFG = useTransform(scrollYProgress, [0, 1], ["10%", "25%"]);

  return (
    <div ref={ref} css={containerCss}>
      {/* TODO: Add framer motion for scrolling Y translation */}
      <div className="parallax">
        <motion.h1 style={{ top: textY }}>Welcome to Canada 🇨🇦</motion.h1>
        <motion.div className="rocks-bg" style={{ bottom: rocksBG }}></motion.div>
        <motion.div className="rocks-fg" style={{ bottom: rocksFG }}></motion.div>
        <motion.div className="hills" style={{ bottom: hillsFG }}></motion.div>
        <motion.div className="foreground"></motion.div>
      </div>

      <div css={sectionTwoCss}>
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, necessitatibus voluptatum quaerat sunt culpa magni animi neque
          vitae quas enim aperiam hic doloribus obcaecati, error quo reiciendis voluptatem vel illum! Voluptate, excepturi aspernatur.
          Facere esse fugit deleniti consequatur fugiat animi eligendi, quia eum atque iusto sapiente perferendis ducimus numquam cupiditate
          ipsam, maiores rem ipsum? Minima sed voluptatibus beatae tempora ratione! Nesciunt mollitia quod repellat blanditiis voluptate,
          enim nostrum aperiam, distinctio architecto fuga possimus, soluta itaque hic eveniet molestias natus corrupti ipsum id error ipsa
          minus. Accusantium, iste! Alias, dolor modi?
        </p>
      </div>
    </div>
  );
}

export default App;
