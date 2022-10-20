import { Box, Button, Flex, FormControl, Input, Stack } from "@chakra-ui/react";

const LogIn = () => {
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
        <form>
          <Stack>
            <FormControl>
              <Input type="email" placeholder="User name" />
            </FormControl>
            <Button width={"full"}>Log in</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LogIn;
