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
  Image,
  rem,
  Flex,
} from "@mantine/core";
// import Image from "next/image";
import NextImage from "next/image";
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
  Image8,
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
  "8": Image8,
};

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

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Stack>
      <div className={classes.pattern1}></div>
      <div className={classes.pattern2}></div>
      <Group
        justify="center"
        w="100%"
        mt="lg"
        px={{ md: "100px", sm: "50px", xs: "20px", base: "20px" }}
      >
        <Flex id="landing" direction={{ base: "column", sm: "row" }}>
          <Stack gap={55} w="100%">
            <Stack>
              <Title c="brand">DEVTOOLS-X</Title>
              <Text size="xl">
                A large cross-platform, fast, collection of developer utilities
              </Text>
              <Text size="sm" c="dimmed">
                More than 40+ features, <br />
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
          <Box>
            <Carousel
              orientation={"horizontal"}
              slideSize={"100%"}
              height={500}
              align={"start"}
              loop
              dragFree
              draggable
              withControls={false}
              plugins={[autoplay.current]}
            >
              {Object.keys(map).map((key) => (
                <Carousel.Slide key={key}>
                  <Image
                    src={map[key as keyof typeof map]}
                    component={NextImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    alt="Banner"
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        </Flex>
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
          <Group wrap="nowrap" grow>
            <Stack>
              <Text c="brand" size="lg">
                Wide range of features
              </Text>
              <Title order={3}>More than 40 features</Title>
              <Text>
                Devtools-x offers a wide range of features, ranging from code
                generators to image compressors, code minifiers, and much more
              </Text>
            </Stack>
            <NextImage
              style={{
                width: "50%",
                height: "auto",
                objectFit: "contain",
              }}
              // component={NextImage}
              src={map[1]}
              alt="Tool 1"
            ></NextImage>
          </Group>

          <Group wrap="nowrap" grow>
            <NextImage
              style={{
                width: "50%",
                height: "auto",
                objectFit: "cover",
              }}
              // component={NextImage}
              src={map[4]}
              sizes="100vw"
              alt="Tool 1"
            ></NextImage>
            <Stack>
              <Text c="brand" size="lg">
                Minimal interface
              </Text>
              <Title order={3}>Developer friendly</Title>
              <Text>
                DevTools-X is built with a minimal interface, keeping developer
                first approach in mind, you can use the entire tool with just a
                keyboard, avoiding touching mouse as much as possible
              </Text>
            </Stack>
          </Group>

          <Group wrap="nowrap" grow>
            <Stack>
              <Text c="brand" size="lg">
                Customizable
              </Text>
              <Title order={3}>Configuration and settings</Title>
              <Text>
                Devtools-x offers a wide range of customization options, ranging
                from themes to settings, you can customize the entire app to fit
                your needs.
              </Text>
            </Stack>
            <NextImage
              style={{
                width: "50%",
                height: "auto",
                objectFit: "cover",
              }}
              src={map[7]}
              sizes="100vw"
              alt="Tool 1"
            ></NextImage>
          </Group>
        </Stack>
      </Container>

      {/* Gallery */}
    </Stack>
  );
}
