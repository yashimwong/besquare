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
        <Header>Step 1: Installing Visual Studio Code</Header>
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
      <SectionContainer>
        <Header>Step 2: Installing Essential Extension</Header>
        <TextBlock>
          To install extensions on vscode, click on the Extensions tab on the sidebar.
          You can search for the extension you want and click install
        </TextBlock>
        <SubHeader>Prettier</SubHeader>
        <TextBlock>
          Just like the {`extension's`} name, this extension helps make your
          code prettier by auto-formating. Once you install it, you can activate
          the auto-formatting by going to the settings {`->`} search for format
          and checking on the Format on Save and Format on Paste
        </TextBlock>
        <SubHeader>Live Server</SubHeader>
        <TextBlock>
          This extension helps you host your code on a local server and serves it to you through a localhost link.
          This will be very useful when looking at the results of your code live on a browser.
        </TextBlock>
        <SubHeader>Live Share</SubHeader>
        <TextBlock>
          This extension allows you to share your screen on vscode where other people can watch you code live.
          It will be useful for collaboration, and you will only know how awesome it is when you try it.
        </TextBlock>
      </SectionContainer>
    </Layout>
  );
};

export default IDESetup;
