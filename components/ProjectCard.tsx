import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link'

export function ProjectCard({image, title, description, link, tags}) {
  return (
    
    <div style={{ width: 320, margin: 'auto' }}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={image}
          height={160}
        />
      </Card.Section>

      <Group position="apart" mt="xs" mb="xs">
        <Text className='title'>{title}</Text><br/>
        <Badge 
        // color="pink" 
        variant="light">
         {tags}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Link href={link} target='_blank'><Button variant="light" color="blue" fullWidth mt="md" radius="md">
        See project
      </Button></Link>
    </Card>
    </div>
  );
}