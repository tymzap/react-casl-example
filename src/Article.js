import { Flex, Stack, Tag, Button } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { useAbility } from "./ability/useAbility";
import Can from "./ability/Can";

const ArticleButtons = ({ article }) => {
  return (
    <>
      <Can I={"edit"} an={article}>
        <Button size={"xs"}>Edit</Button>
      </Can>
      <Can I={"delete"} an={article}>
        <Button size={"xs"}>Delete</Button>
      </Can>
    </>
  );
};

const Article = ({ article }) => {
  const ability = useAbility();

  if (ability.can("read", "Article")) {
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
  }

  return null;
};

export default Article;
