import type { NextPage } from "next";
import Layout from "components/layout";

const Home: NextPage = () => {
  return (
    <Layout page_name="Welcome">
      <h1 className="text-3xl uppercase font-bold mb-2">Welcome!</h1>
      <p>
        Hey, there! Welcome to the Introduction to HTML, CSS and JavaScript
        course of the Besquare programme. Hope you are having fun up to this
        point! In this course, you will be learning the 3 build blocks of the
        web.
      </p>
      <p>
        For the BeSquare programme, we expect participants to have some
        programming knowledge beforehand. However if you are absolutely new to
        programming, you can start from Section 2. If you have experience in
        programming but is new to Web Development, you probably can skip
        straight to Section 5.
      </p>
    </Layout>
  );
};

export default Home;
