import { Grid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import PostCard from "./PostCard";
import { blogData } from "../../data";
import { Heading } from "@chakra-ui/layout";
const RecentPosts = () => {
  return (
    <Container
      maxW="
    1300px"
    >
      <Heading m="8" fontSize="2xl">
        Recent Posts
      </Heading>
      <Grid
        gridGap="4"
        gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))"
      >
        {blogData.map((post) => (
          <GridItem key={post.title} display="flex" justifyContent="center">
            <PostCard post={post} />
          </GridItem>
        ))}
      </Grid>
      <Heading m="8" textAlign="center" fontSize="2xl">
        Read more...
      </Heading>
    </Container>
  );
};

export default RecentPosts;
