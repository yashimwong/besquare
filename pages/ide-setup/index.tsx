import { SectionContainer } from "components/container";
import Layout from "components/layout";
import {
  MainHeader,
  Header,
  TextBlock,
  SubHeader,
} from "components/typography";
import { NextPage } from "next";
import Link from "next/link";

const IDESetup: NextPage = () => {
  return (
    <Layout page_name="IDE Setup">
      <MainHeader>IDE Setup</MainHeader>
      <SectionContainer>
        <Header>What is an IDE?</Header>
        <TextBlock>
          IDEs (Integrated Development Environment) are softwares that we use to
          code on. Depending on which you use, they generally come with a code
          editor, terminal and a compiler. You are free to use whichever code
          editor that you are comfortable with but for the intents of the
          course, we will be using <strong>Visual Studio Code</strong>.
        </TextBlock>
      </SectionContainer>
      <SectionContainer>
        <Header>Visual Studio Code</Header>
        <SubHeader>Ubuntu</SubHeader>
        <TextBlock>
          If you are using <strong>Ubuntu</strong>, simply download
          <Link
            href="https://code.visualstudio.com/docs/?dv=linux64_deb"
            passHref
          >
            <span className="bg-gray-900 text-white px-2 py-1 rounded ml-2 hover:bg-gray-600 cursor-pointer shadow">
              Linux 64-bit .deb file
            </span>
          </Link>
        </TextBlock>
        <TextBlock>
          Go to your downloads and simply double click on the .deb file to begin
          your installation. It will show the software center window and simply
          enter your user password to proceed with the installation.
        </TextBlock>
      </SectionContainer>
    </Layout>
  );
};

export default IDESetup;
