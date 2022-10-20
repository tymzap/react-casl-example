import { Flex, Stack, Tag, Button } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";

const ArticleButtons = ({ article }) => {
  return (
    <>
      <Button size={"xs"}>Edit</Button>
      <Button size={"xs"}>Delete</Button>
    </>
  );
};

const Article = ({ article }) => {
  return (
    <Flex borderWidth={1} borderRadius={"sm"} padding={5}>
      <Stack width={"100%"}>
        <Flex justifyContent={"space-between"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
            {article.name}
            {article.isPublished && <Tag colorScheme="teal">Published</Tag>}
          </Flex>
          <Stack direction={"row"}>
            <ArticleButtons article={article} />
          </Stack>
        </Flex>
        <Flex justifyContent={"flex-start"} alignItems={"center"} gap={2}>
          <AtSignIcon width={3} />
          {article.createdBy.name}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Article;
