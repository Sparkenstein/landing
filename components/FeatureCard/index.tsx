import { Card, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function FeatureCard({
  icon,
  description,
  title,
}: FeatureCardProps) {
  const { hovered, ref } = useHover();
  return (
    <Card shadow="sm" p="lg" radius={"md"} h="100%" ref={ref}>
      <Stack align="center">
        <ThemeIcon
          size={80}
          variant={hovered ? "filled" : "transparent"}
          radius={40}
        >
          {icon}
        </ThemeIcon>
        <Title order={4}>{title}</Title>
        <Text ta="center" size="xs" c="dimmed">
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
