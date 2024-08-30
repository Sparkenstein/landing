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
  Paper,
} from "@mantine/core";
// import Image from "next/image";
import NextImage from "next/image";
import {
  IconAdjustmentsHeart,
  IconBook2,
  IconBrandApple,
  IconBrandGithub,
  IconBrandReact,
  IconCloudStorm,
  IconCross,
  IconCrossOff,
  IconDownload,
  IconFeather,
  IconLock,
  IconPencil,
  IconPlayerPlay,
  IconX,
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
import AutoHeight from "embla-carousel-auto-height";
import { Carousel } from "@mantine/carousel";
import FeatureCards from "./components/FeatureCards";
import Showcase from "./components/Showcase";
import { useRouter } from "next/navigation";

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

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const autoHeight = useRef(AutoHeight());
  const { push } = useRouter();

  return (
    <Stack>
      <div className={classes.pattern1}></div>
      <div className={classes.pattern2}></div>
      <Group
        justify="center"
        w="100%"
        mt="lg"
        px={{ md: "200px", sm: "50px", xs: "20px", base: "20px" }}
      >
        <Flex
          id="landing"
          direction={{ base: "column", sm: "row" }}
          justify={"space-between"}
          gap={50}
        >
          <Stack justify="space-evenly" gap={55} w="100%">
            <Stack gap={20}>
              <Title c="brand">DEVTOOLS-X</Title>
              <Text size="lg">
                A large cross-platform, fast, collection of developer utilities
              </Text>
              <Text size="sm" c="dimmed">
                More than 40+ features, <br />
                Built with Tauri, React, and Rust. Made with ❤️ by the
                community.
              </Text>
            </Stack>
            <Group wrap="nowrap">
              <Button
                size="lg"
                rightSection={<IconDownload />}
                onClick={() =>
                  push(
                    "https://github.com/fosslife/devtools-x/releases/tag/devtoolsx-v2.15.0"
                  )
                }
              >
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
              slideGap={10}
              height={600}
              w={"100%"}
              align={"start"}
              loop
              // dragFree
              draggable
              withControls={false}
              plugins={[autoHeight.current, autoplay.current]}
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
      <FeatureCards />

      {/* Showcase */}
      <Showcase />

      {/* Tecj */}
      <Container size={"xl"} mb="lg" mt={150}>
        <Paper withBorder radius={"lg"} p="xl" shadow="xl">
          <Group justify="space-between" grow>
            <Stack align="center">
              <IconLock />
              <Text size="xl">Rust</Text>
              <Text ta="center" size="sm">
                DevTools-X is backed by Rust doing all the heavy lifting like
                calculating hash or minifying code
              </Text>
            </Stack>
            <Stack align="center">
              <IconAdjustmentsHeart />
              <Text size="xl">Tauri</Text>
              <Text ta="center" size="sm">
                DevTools-X is written in tauri, which is a framework for
                building safe desktop without sacrificing performance or size
              </Text>
            </Stack>
            <Stack align="center">
              <IconBrandReact />
              <Text size="xl">React</Text>
              <Text ta="center" size="sm">
                DevTools-X is built with React, which is a popular library for
                building user interfaces
              </Text>
            </Stack>
          </Group>
        </Paper>
      </Container>
    </Stack>
  );
}
