import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [render, setRender] = useState(false);
  useFetch("users", render);
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = () => {
    axios
      .post("http://localhost:3000/users", user)
      .then(() => {
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container w={"100%"} h={"100%"} position={"relative"}>
        <FormControl
          position={"absolute"}
          top={"15dvh"}
          left={"3dvh"}
          backgroundColor={"white"}
          boxShadow={"2xl"}
          borderRadius={"10px"}
          p={"2rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
            Sign Up
          </Text>
          <Box className="name">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" id="name" name="name" onChange={handleChange} />
          </Box>
          <Box className="email">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </Box>
          <Box className="username">
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
            />
          </Box>
          <Box className="password">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Button
              type="submit"
              colorScheme="blue"
              onClick={handleSignUp}
              mr={"1rem"}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              onClick={() => navigate("/login")}
              ml={"1rem"}
            >
              {" "}
              Login
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};
