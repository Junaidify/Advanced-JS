import { useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Text,
  GridItem,
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    deadline: "",
    assignee: "",
    members: [
      {
        id: "",
        title: "",
      },
    ],
  });
  const [fetched, setFetched] = useState(false);
  useFetch("tasks", fetched);
  const { data } = useSelector((state) => state.user);
  const [showPopup, setShowPopup] = useState(false);
  const [priority, setPriority] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    setTask({...task, priority: priority});

  };

  const handleAddMembers = (id) => {
    const member = data.find((member) => member.id === id);
    setTask((prev) => ({
      ...prev,
      members: [...prev.members, member.id, member.title],
    }));
  };

  const handleCreateTask = async () => {
    if (task.members.length === 0) return alert("Please add members");
    if (task.title.trim() === "") return alert("Please enter a title");
    if (task.description.trim() === "")
      return alert("Please enter a description");
    if (task.priority.trim() === "") return alert("Please enter a priority");
    if (task.status.trim() === "") return alert("Please enter a status");
    if (task.deadline.trim() === "") return alert("Please enter a deadline");
    if (task.assignee.trim() === "") return alert("Please enter an assignee");

    try {
      await axios.post("http://localhost:3000/tasks", task);
      setFetched((prev) => !prev);
      setTask({
        title: "",
        description: "",
        priority: false,
        status: "pending",
        deadline: "",
        assignee: "",
      });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Grid
        w={"60%"}
        templateColumns="80% 15%"
        margin={"5dvh auto 0"}
        rowGap={"1rem"}
      >
        <FormControl
          w={"80%"}
          margin={"0 auto"}
          backgroundColor={"white"}
          p={"2rem"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Box>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              type="text"
              value={task.title}
              id="title"
              name="title"
              onChange={handleChange}
              placeholder="Enter Task Title"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="description">Description</FormLabel>{" "}
            <Input
              type="text"
              value={task.description}
              id="description"
              name="description"
              onChange={handleChange}
              placeholder="Enter Task Description"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="deadline">Deadline</FormLabel>
            <Input
              type="date"
              value={task.deadline}
              id="deadline"
              name="deadline"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="assignee">Assignee</FormLabel>
            <Input
              type="text"
              value={task.assignee}
              id="assignee"
              name="assignee"
              onChange={handleChange}
              placeholder="Assignee..."
            />
          </Box>
          <Box>
            <FormLabel htmlFor="priority">Priority</FormLabel>
            <Button onClick={() => setPriority(!priority)}>
              {priority ? "Urgent" : "Medium"}
            </Button>
          </Box>

          <Box mt={4}>
            <Button colorScheme="blue" onClick={handleCreateTask}>
              Create Task
            </Button>
          </Box>
        </FormControl>

        <GridItem display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Text
            fontWeight={"bold"}
            fontSize={"1.1rem"}
            bg={"lightblue"}
            p={"0.5rem"}
            mt={"1rem"}
            borderRadius={"10px"}
            color={"black"}
          >
            Add Members
          </Text>
          {data.map((member) => (
            <Button onClick={() => handleAddMembers(member.id)} key={member.id}>
              {member.title}
            </Button>
          ))}
        </GridItem>
      </Grid>

      <Box
        color="green.500"
        position={"absolute"}
        w={"20%"}
        h={"15%"}
        zIndex={2}
        top={"23%"}
        left={"40%"}
        visibility={showPopup ? "visible" : "hidden"}
        backgroundColor={"white"}
        borderRadius={"10px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={"2xl"}
        fontSize={"1.5rem"}
      >
        <h1>Task Created</h1>
      </Box>
    </>
  );
};

export default CreateTask;
