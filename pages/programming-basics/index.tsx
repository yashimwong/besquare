import { SectionContainer } from "components/container";
import Layout from "components/layout";
import { MainHeader, Header, TextBlock } from "components/typography";
import { NextPage } from "next";

const ProgrammingBasics: NextPage = () => {
  return (
    <Layout page_name="Programming Basics">
      <MainHeader>Programming Basics</MainHeader>
      <p>
        This section will be covering common questions of people who is new to
        the programming field.
      </p>
      <SectionContainer>
        <Header>Question 1: What is Programming?</Header>
        <TextBlock>
          Programming in a nutshell is simply the process of telling a computer
          what to do. We as programmers (developers, engineers, the naming can
          vary) tell the computer what to do using specific instructions.
          Computers are not really smart so these instructions must be very
          specific.
        </TextBlock>
        <TextBlock>
          Sadly, machines only understand binary. Binary for those of you who
          have an electric/electronic engineering background is simply switches
          that have two state which is on(1) or off(0). Without getting into too
          much details, we simply created a more natural language to communicate
          with machines who only talk in binary.
        </TextBlock>
        <TextBlock>
          There are many languages that we have created to talk to machines: C,
          C#, JavaScript, Perl, Python, PHP to name a few. There are differences
          in how these different languages work but we wont go into too much
          details to keep this introduction friendly.
        </TextBlock>
      </SectionContainer>
      <Header>
        Question 2: Do I need to learn all languages? How to be good at this
        field?
      </Header>
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
