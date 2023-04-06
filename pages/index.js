import Button from "../components/Button";
import Container from "../components/Container";
import InfoBox from "../components/InfoBox";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      {/* Container({direction: "column", bgColor: "red"}) */}
      <Container>
        <Button bgcolor="danger">click me</Button>
        <Button>click me</Button>
      </Container>
      <Container direction="row">
        <Button>click me</Button>
        <p>
          This is a <Link href="/">styled link</Link> to another page
        </p>
      </Container>
      <Container direction="column">
      <InfoBox title="This is an info" message="Read it carefully!" />
      <InfoBox
        title="It worked"
        message="You have done it!"
        variant="success"
      />
      <InfoBox title="Error" message="Something went wrong!" variant="error" />
    </Container>
    </>
  );
}
