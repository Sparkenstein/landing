import { Container, Grid } from "@mantine/core";
import FeatureCard, { FeatureCardProps } from "../../components/FeatureCard";
import {
  IconBook2,
  IconFeather,
  IconPencil,
  IconCloudStorm,
  IconBrandApple,
  IconBrandGithub,
} from "@tabler/icons-react";

const data = [
  {
    id: 1,
    title: "Multiple modules",
    description:
      "More than 40+ developer friendly tools, ranging from code generators to image compressors.",
    icon: <IconBook2 style={{ width: "70%", height: "70%" }} />,
  },
  {
    id: 2,
    title: "Lightweight",
    description:
      "App size is less than 10MB, and it's super fast and responsive.",
    icon: <IconFeather style={{ width: "70%", height: "70%" }} />,
  },
  {
    id: 3,
    title: "customization",
    description:
      "Most features offer a wide range of customization options to suit your needs.",
    icon: <IconPencil style={{ width: "70%", height: "70%" }} />,
  },
  {
    id: 4,
    title: "Fast and responsive",
    description:
      "Built with Tauri, React, and Rust, the app is super fast and responsive.",
    icon: <IconCloudStorm style={{ width: "70%", height: "70%" }} />,
  },
  {
    id: 5,
    title: "Cross platform",
    description:
      "Same ui, across all platforms, supports same settings. all thanks to Rust + Tauri",
    icon: <IconBrandApple style={{ width: "70%", height: "70%" }} />,
  },
  {
    id: 6,
    title: "Community",
    description:
      "Devtools-x is open-source and free since day one. Feel free to explore the codebase or contribute.",
    icon: <IconBrandGithub style={{ width: "70%", height: "70%" }} />,
  },
];

export default function FeatureCards() {
  return (
    <Container mb="lg" mt={50} id="features">
      <Grid gutter={40}>
        {data.map((item) => (
          <Grid.Col
            key={item.id}
            span={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <FeatureCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
