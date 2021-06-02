import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

const PostCard = ({ post }) => {
  return (
    <Stack w="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
      <Image src={post.imageUrl} />
      <Stack p="4">
        <Heading mb="4" fontSize="xl">
          {post.title}
        </Heading>
        <Flex mb="4" align="center">
          <Avatar size="sm" mr="2" src={post.avatar} />
          <Text fontSize="md" mr="2" fontWeight="bold">
            {post.authorName}
          </Text>
          <Text fontSize="md">{post.publishDate}</Text>
        </Flex>
        <Text mb="4">{post.description}</Text>
        <Flex mb="4">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Flex>
        <Button alignSelf="flex-end" colorScheme="orange">
          Read more
        </Button>
      </Stack>
    </Stack>
  );
};

export default PostCard;
