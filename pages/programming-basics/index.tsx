import Layout from "components/layout";
import { NextPage } from "next";

const ProgrammingBasics: NextPage = () => {
  return (
    <Layout page_name="Programming Basics">
      <h1 className="text-3xl uppercase font-bold mb-2">Programming Basics</h1>
      <p>
        This section will be covering common questions of people who is new to
        the programming field.
      </p>
      <section className="mt-4 mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Question 1: What is Programming?
        </h2>
        <p className="mb-3">
          Programming in a nutshell is simply the process of telling a computer
          what to do. We as programmers (developers, engineers, the naming can
          vary) tell the computer what to do using specific instructions.
          Computers are not really smart so these instructions must be very
          specific.
        </p>
        <p className="mb-3">
          Sadly, machines only understand binary. Binary for those of you who
          have an electric/electronic engineering background is simply switches
          that have two state which is on(1) or off(0). Without getting into too
          much details, we simply created a more natural language to communicate
          with machines who only talk in binary.
        </p>
        <p className="mb-3">
          There are many languages that we have created to talk to machines: C,
          C#, JavaScript, Perl, Python, PHP to name a few. There are differences
          in how these different languages work but we wont go into too much
          details to keep this introduction friendly.
        </p>
      </section>
      <h2 className="text-2xl font-bold mb-2">
        Question 2: Do I need to learn all languages? How to be good at this
        field?
      </h2>
      <p className="mb-2">
        Absolutely not. To be good at this field what you need to do is the
        following:
      </p>
      <ol>
        <li>
          1 - Be resourceful. We have the power of the internet where we can
          find information on absolutely everything on programming.
        </li>
        <li>
          2 - Try to understand things. Many people who are new simply do try
          and error to fix a bug or complete the task they have at hand. Try to
          understand the problem, the moving parts, the code even when
          copy-pasting solution from stackoverflow.
        </li>
        <li>
          3 - Be empathic. Most often than not, we usually work in a team when
          programming. When coding try to think of other people who are working
          with you. Will they understand your code? Will your changes cause
          problems to them?
        </li>
      </ol>
    </Layout>
  );
};

export default ProgrammingBasics;
