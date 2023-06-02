import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link'

export function ProjectCard(props : any) {
  return (
    
    <div style={{ width: '50%', margin: 'auto' }}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={props.image}
          height={160}
          alt=""
        />
      </Card.Section>

      <Group position="apart" mt="xs" mb="xs">
        <Text className='title'>{props.title}</Text><br/>
        <Badge 
        // color="pink" 
        variant="light">
         {props.tags}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.description}
      </Text>

      <Link href={props.link} target='_blank'><Button variant="light" color="blue" fullWidth mt="md" radius="md">
        See project
      </Button></Link>
    </Card>
    </div>
  );
}