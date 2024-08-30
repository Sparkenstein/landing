"use client";

import {
  ActionIcon,
  Box,
  Button,
  Drawer,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";
import classes from "./navbar.module.css";
import { IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./logo.png";

const navbarItems = [
  {
    id: 1,
    title: "Features",
    element: "features",
  },
  {
    id: 2,
    title: "Showcase",
    element: "showcase",
  },
];

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <Group className={classes.navbar} justify="space-around" wrap="nowrap">
      <Group gap={5} wrap="nowrap" onClick={() => scrollTo("landing")}>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <Text
          variant="gradient"
          fw={700}
          size={"24px"}
          gradient={{ from: "brand", to: "blue", deg: 90 }}
        >
          Devtools-X
        </Text>
      </Group>
      <Group gap="xl" visibleFrom="md" className={classes.menuitems}>
        {navbarItems.map((i) => (
          <Text
            key={i.id}
            fw={500}
            onClick={() => scrollTo(i.element as string)}
          >
            {i.title}
          </Text>
        ))}
        <Text
          fw={500}
          component={"a"}
          href="https://github.com/fosslife/devtools-x/blob/master/features.md"
          target="_blank"
        >
          Gallery
        </Text>
        <Text
          fw={500}
          component={"a"}
          href="https://github.com/fosslife/devtools-x/blob/master/CHANGELOG.md"
          target="_blank"
        >
          Changelog
        </Text>
        <Text
          fw={500}
          component={"a"}
          href="https://github.com/fosslife/devtools-x"
          target="_blank"
          ta={"center"}
        >
          Leave a star
        </Text>
      </Group>
      <Group align="center" wrap="nowrap">
        <Box onClick={() => toggleColorScheme()} mt="5">
          {colorScheme === "dark" ? (
            <ActionIcon variant="transparent">
              <IconMoon />
            </ActionIcon>
          ) : (
            <ActionIcon variant="transparent">
              <IconSun />
            </ActionIcon>
          )}
        </Box>

        <Button size="sm" visibleFrom="sm">
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            href="https://github.com/fosslife/devtools-x/releases"
          >
            Download
          </a>
        </Button>
        <ActionIcon variant="transparent" hiddenFrom="md">
          <IconMenu2 onClick={open} />
        </ActionIcon>
      </Group>

      <Drawer onClose={close} opened={opened}>
        <Stack align="center" className={classes.menuitems}>
          <Text fw={500}>Features</Text>
          <Text fw={500}>Tools</Text>
          <Text fw={500}>Changelog</Text>
          <Text fw={500}>Gallery</Text>
          <Text fw={500}>Contribute</Text>
          <Button size="sm" hiddenFrom="sm">
            Download
          </Button>
        </Stack>
      </Drawer>
    </Group>
  );
}
