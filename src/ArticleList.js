import { Container, Flex, Stack, Button, Box } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";

import Article from "./Article";
import { UserContext } from "./User.context";

const ArticleListButtons = () => {
  return (
    <>
      <Button>Create</Button>
    </>
  );
};

const ArticleList = () => {
  const { user, logOut } = useContext(UserContext);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <Flex
      width={"100wh"}
      height={"100vh"}
      flexDirection="column"
      backgroundColor="gray.200"
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
    >
      <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
        {JSON.stringify(user)}
        <Button
          size={"sm"}
          onClick={() => {
            logOut();
          }}
          colorScheme="red"
        >
          Log out
        </Button>
      </Flex>
      <Container
        padding={5}
        shadow={"md"}
        borderWidth={"1px"}
        background={"white"}
        gap={5}
      >
        <Stack spacing={5}>
          <Box>
            <ArticleListButtons />
          </Box>
          <Stack spacing={5}>
            {articles.map((article) => (
              <Article article={article} key={article.id} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default ArticleList;
