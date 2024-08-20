import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
} from "@chakra-ui/react";

export const Login = () => {
  return (
    <>
      <Container w={"100%"} h={"100%"} position={"relative"}>
        <FormControl
          position={"absolute"}
          top={"25dvh"}
          left={"5dvh"}
          backgroundColor={"white"}
          boxShadow={"2xl"}
          borderRadius={"10px"}
          p={"2rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Box>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username..."
            />
          </Box>
          <Box>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
            />
          </Box>
          <Box>
            <Button type="submit" colorScheme="blue" mr={"1rem"}>
              Login
            </Button>
            <Button type="submit" colorScheme="blue" ml={"1rem"}>
              Register
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};
