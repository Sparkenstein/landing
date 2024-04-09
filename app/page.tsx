"use client";

import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
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

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Stack>
      <Group w="100%" justify="center" h="100%">
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
        <SimpleGrid cols={3} spacing={55}>
          <FeatureCard
            icon={<IconBook2 style={{ width: "70%", height: "70%" }} />}
            title="Multiple modules"
            description="More than 35+ developer friendly tools, ranging from code generators to image compressors."
          />
          {/*  */}
          <FeatureCard
            icon={<IconFeather style={{ width: "70%", height: "70%" }} />}
            title="Lightweight"
            description="App size is less than 10MB, and it's super fast and responsive."
          />
          <FeatureCard
            icon={<IconPencil style={{ width: "70%", height: "70%" }} />}
            title="customization"
            description="Most features offer a wide range of customization options to suit your needs."
          />
          <FeatureCard
            icon={<IconCloudStorm style={{ width: "70%", height: "70%" }} />}
            title="Fast and responsive"
            description="Built with Tauri, React, and Rust, the app is super fast and responsive."
          />
          <FeatureCard
            icon={<IconBrandApple style={{ width: "70%", height: "70%" }} />}
            title="Cross platform"
            description="Same ui, across all platforms, supports same settings. all thanks to Rust + Tauri"
          />
          <FeatureCard
            icon={<IconBrandGithub style={{ width: "70%", height: "70%" }} />}
            title="Community"
            description="Devtools-x is open-source and free since day one. Feel free to explore the codebase or contribute."
          />

          {/*  */}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
