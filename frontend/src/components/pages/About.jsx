import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Articulation" is a platform that caters to both readers and authors in
          the field of technology. It provides a space where readers can explore
          articles on trending technologies, while authors can contribute their
          own articles to share insights and knowledge with the community. The
          platform aims to create a collaborative environment where individuals
          can engage in meaningful discussions and stay updated with the latest
          advancements in technology
        </p>
        <p>
          readers can find several sections to explore articles based on
          categories, trending topics, and latest blogs. Additionally, the
          homepage features pictures of famous authors to highlight their
          contributions to the platform
        </p>
        <p>
          Categories: A section showcasing different categories of articles such
          as Lifestyle, technologies and so on..
        </p>
        <p>
          Trending Articles: A carousel or list highlighting the most popular or
          trending articles on the platform <br>

          </br> Latest Blogs: A section displaying
          the most recent blog posts or articles added to the platform. This
          allows readers to stay up-to-date with the latest content published by
          authors on "Articulation
        </p>
        <p>
           A grid or carousel showcasing pictures of famous authors on the platform. .
        </p>
      </div>
    </article>
  );
};

export default About;
