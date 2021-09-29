import type { NextPage } from "next";
import Layout from "components/layout";

const Home: NextPage = () => {
  return (
    <Layout page_name="Welcome">
      <h1 className="text-2xl uppercase font-bold mb-2">Welcome!</h1>
      <p>
        Hey, there! Welcome to the Fundamentals of the Web. In this course, we
        will be learning the 3 build blocks of the web namely HTML, CSS and
        Javascript.
      </p>
      <p>
        For the BeSquare programme, we expect participants to have some
        programming knowledge beforehand. However if you are absolutely new to
        programming, you can start from Section 2.
      </p>
      <p>
        If you have experience in programming but is new to Web Development, you
        can skip to Section 4
      </p>
    </Layout>
  );
};

export default Home;
