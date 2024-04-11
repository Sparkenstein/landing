"use client";

import classes from "./page.module.css";

import {
  ActionIcon,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import Image from "next/image";
import {
  IconBook2,
  IconBrandApple,
  IconBrandGithub,
  IconCloudStorm,
  IconDownload,
  IconFeather,
  IconPencil,
  IconPlayerPlay,
} from "@tabler/icons-react";

import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../assets";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import FeatureCard from "../components/FeatureCard";

const map = {
  "1": Image1,
  "2": Image2,
  "3": Image3,
  "4": Image4,
  "5": Image5,
  "6": Image6,
  "7": Image7,
};

const data = [
  {
    id: 1,
    title: "Multiple modules",
    description:
      "More than 35+ developer friendly tools, ranging from code generators to image compressors.",
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

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Stack>
      <Group w="100%" justify="center" h="100%" id="landing">
        <div className={classes.pattern1}></div>
        <div className={classes.pattern2}></div>
        <Box>
          <Stack gap={55}>
            <Stack>
              <Title c="brand">DEVTOOLS-X</Title>
              <Text size="xl">
                A large cross-platform, fast, collection of developer utilities
              </Text>
              <Text size="sm" c="dimmed">
                More than 35+ features, <br />
                Built with Tauri, React, and Rust. Made with ❤️ by the
                community.
              </Text>
            </Stack>
            <Group>
              <Button size="lg" rightSection={<IconDownload />}>
                Download now
              </Button>
              <ActionIcon radius={"xl"} size={50} variant="outline">
                <IconPlayerPlay />
              </ActionIcon>
              <Text>Watch a video</Text>
            </Group>
          </Stack>
        </Box>
        <Box
          w="50%"
          h="50%"
          style={{
            overflow: "hidden",
          }}
        >
          <Carousel
            align={"start"}
            orientation="vertical"
            slideSize={{ base: "5%", xs: "100%" }}
            height={700}
            dragFree
            withControls={false}
            loop
            plugins={[autoplay.current]}
          >
            {Object.keys(map).map((key) => (
              <Carousel.Slide key={key}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={map[key as keyof typeof map]}
                  sizes="100vw"
                  alt="Banner"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Group>
      {/* Features Card */}
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

      {/* Showcase */}
      <Container mb="lg" mt={150}>
        <Stack gap={160} id="showcase">
          <Group wrap="nowrap">
            <Stack>
              <Text c="brand">Wide range of features</Text>
              <Title order={3}>More than 35 features</Title>
              <Text>
                Devtools-x offers a wide range of features, ranging from code
                generators to image compressors, code minifiers, and much more
              </Text>
            </Stack>
            <Image
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={map[1]}
              sizes="100vw"
              alt="Tool 1"
            ></Image>
          </Group>

          <Group wrap="nowrap">
            <Image
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={map[1]}
              sizes="100vw"
              alt="Tool 1"
            ></Image>
            <Stack>
              <Text c="brand">Minimal interface</Text>
              <Title order={3}>Developer friendly</Title>
              <Text>
                Devtools-x offers a minimal interface, with a wide range of
                developer tools, ranging from code generators to image
                compressors
              </Text>
            </Stack>
          </Group>

          <Group wrap="nowrap">
            <Stack>
              <Text c="brand">Minimal interface</Text>
              <Title order={3}>Developer friendly</Title>
              <Text>
                Devtools-x offers a minimal interface, with a wide range of
                developer tools, ranging from code generators to image
                compressors
              </Text>
            </Stack>
            <Image
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={map[2]}
              sizes="100vw"
              alt="Tool 1"
            ></Image>
          </Group>
        </Stack>
      </Container>

      {/* Gallery */}
    </Stack>
  );
}
