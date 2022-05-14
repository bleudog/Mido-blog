import Image from "next/image";
import Link from "next/link";
import Footer from "@components/Footer";
import metadata from "@data/metadata";
import Container from "@components/Container";
import utilStyles from "@styles/utils.module.scss";
import profileImg from "../public/images/profile.jpg";
import {
  PageHeader,
  PageSubtitle,
  PageTitle,
} from "@components/custom-tw-components";

export default function About() {
  const customMeta = {
    title: `${metadata.title} - About`,
  };
  return (
    <Container customMeta={customMeta}>
      <Image
        priority
        className={utilStyles.circleImage}
        src={profileImg}
        width={120}
        height={120}
        alt="Blue Eu"
      />
      <PageHeader>
        <PageTitle>{"Hi, I'm Blue."}</PageTitle>
        <PageSubtitle>{"I'm a frontend engineer."}</PageSubtitle>
        <email>
          <Link
            href={"mailto:mido.eu@proton.me?subject=Request from m-e.blue"}
            target="_blank"
            rel="noreferrer"
          >
            <a className={`text-secondary`}> mido.eu@proton.me </a>
          </Link>
        </email>
      </PageHeader>

      <hr />
      <div className={`text-pramiry`}>
        <p>Under Construction..</p>
      </div>
      <hr />
      <Footer />
    </Container>
  );
}
