import { Box, Button, Flex, FormControl, Input, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";

import { UserContext } from "./User.context";

const LogIn = () => {
  const [userName, setUserName] = useState();

  const { setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    fetch(`/login?name=${userName}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  return (
    <Flex
      width={"100wh"}
      height={"100vh"}
      flexDirection="column"
      backgroundColor="gray.200"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box padding={5} shadow={"md"} borderWidth={"1px"} background={"white"}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Stack>
            <FormControl
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            >
              <Input placeholder="User name" />
            </FormControl>
            <Button type={"submit"} width={"full"} colorScheme="teal">
              Log in
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LogIn;
