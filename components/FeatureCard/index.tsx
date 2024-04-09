import { Card, Stack, Text, ThemeIcon, Title } from "@mantine/core";

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
  return (
    <Card shadow="sm" p="lg" radius={"md"}>
      <Stack align="center">
        <ThemeIcon size={"xl"} variant="transparent">
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
