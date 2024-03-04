import Container from "@/components/library/Container.jsx";
import Button from "@/components/library/Button";

const NewsLatter = () => {
  return (
    <Container className="bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree hover:bg-gradient-to-tl text-darkGray md:flex justify-between rounded px-10 py-10">
      <h1 className="2xl:text-3xl md:text-2xl text-xl font-semibold pb-4">
        Need more help? <br /> Get in touch with us today!{" "}
      </h1>
      <div className="flex items-center gap-8">
        <Button>Submit ticket</Button>
        <Button>Read documentation</Button>
      </div>
    </Container>
  );
};

export default NewsLatter;
