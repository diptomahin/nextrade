import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import Subtitle from "@/components/library/Subtitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <Container className="py-20 overflow-hidden">
      <Title> Service We Offer</Title>
      <Subtitle>
        We offer the best services around from installations to repairs,
        maintenance, and more!
      </Subtitle>

      <ServiceCard />
    </Container>
  );
};

export default Services;
