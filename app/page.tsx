import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Banner from "./banner.png";
import Image from "next/image";
import { IconDownload, IconPlayerPlay, IconVideo } from "@tabler/icons-react";

export default function HomePage() {
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
        <Box w="50%">
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            src={Banner}
            sizes="100vw"
            alt="Banner"
          />
        </Box>
      </Group>
    </Stack>
  );
}
