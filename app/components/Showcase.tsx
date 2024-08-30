import { Container, Group, Stack, Text, Title } from "@mantine/core";
import NextImage from "next/image";
import { Image1, Image4, Image7 } from "../../assets";

export default function Showcase() {
  return (
    <Container size={"70rem"} mb="lg" mt={150}>
      <Stack gap={80} id="showcase">
        <Group wrap="nowrap" grow>
          <Stack>
            <Text c="brand" size="lg">
              Wide range of features
            </Text>
            <Title order={2}>More than 40 features</Title>

            <Text>
              Devtools-x offers a wide range of features, ranging from code
              generators to image compressors, code minifiers, and much more
            </Text>
          </Stack>
          <NextImage
            style={{
              width: "50%",
              height: "auto",
              objectFit: "cover",
            }}
            src={Image1}
            sizes="100vw"
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
            src={Image4}
            alt="Tool 1"
          ></NextImage>
          <Stack>
            <Text c="brand" size="lg">
              Minimal interface
            </Text>
            <Title order={2}>Developer friendly</Title>
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
            <Title order={2}>Configuration and settings</Title>
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
            src={Image7}
            sizes="100vw"
            alt="Tool 1"
          ></NextImage>
        </Group>
      </Stack>
    </Container>
  );
}
