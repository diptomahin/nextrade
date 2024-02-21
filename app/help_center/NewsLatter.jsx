import Container from "@/components/library/Container.jsx";
import DarkButton from "@/components/library/buttons/DarkButton";

const NewsLatter = () => {
  return (
    <Container className="bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree hover:bg-gradient-to-tl text-darkGray md:flex justify-between rounded px-10 py-10">
      <h1 className="xl:text-3xl md:text-2xl text-xl font-semibold pb-4">
        Need more help? <br /> Get in touch with us today!{" "}
      </h1>
      <div className="flex items-center gap-8">
        <DarkButton>Submit ticket</DarkButton>
        <DarkButton>Read documentation</DarkButton>
      </div>
    </Container>
  );
};

export default NewsLatter;
