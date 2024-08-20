import { useFetch } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Input,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { API_FETCH } from "../../constants/actionTypes";
import { useState } from "react";

const DisplayTask = () => {
  useFetch("tasks", true);
  const { loading, error, data } = useSelector((state) => state.fetch);
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(null);
  const [status, setStatus] = useState(false);
  const [priority, setPriority] = useState(false);

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      dispatch({ type: API_FETCH.TASKS.DELETE, payload: id });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTask = (id) => {
    const taskToEdit = data.find((task) => task.id === id);
    setUpdatedTask(taskToEdit);
    setUpdatedTask({ ...updatedTask, status: status, priority: priority });
  };

  const handleUpdateTask = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/tasks/${updatedTask.id}`,
        updatedTask
      );
      dispatch({ type: API_FETCH.TASKS.LOADING });
      const res = await axios.get("http://localhost:3000/tasks");
      dispatch({ type: API_FETCH.TASKS.SUCCESS, payload: res.data });
      setUpdatedTask(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchFunc = (e) => {
    const { value } = e.target;

    if (value.trim() !== "") {
      dispatch({ type: API_FETCH.TASKS.SEARCH, payload: value });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <Box position={"absolute"} top={"3dvh"} right={"3dvh"} w={"20%"}>
        <Input
          placeholder="Search"
          type="text"
          name="search"
          onChange={handleSearchFunc}
        />
        <Button
          onClick={() => dispatch({ type: API_FETCH.TASKS.SORT_PRIORITY })}
        >
          Priority
        </Button>
        <Button
          onClick={() => dispatch({ type: API_FETCH.TASKS.SORT_DEADLINE })}
        >
          Deadline
        </Button>
        <Button
          onClick={() => dispatch({ type: API_FETCH.TASKS.SORT_CREATION })}
        >
          Creation
        </Button>
      </Box>
      <Text
        fontWeight={"bold"}
        fontSize={"4xl"}
        textAlign={"center"}
        mt={"3dvh"}
      >
        Tasks
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w={"70%"}
        margin={"3dvh auto 0"}
        gap={"3dvh"}
      >
        {data.map((task) => (
          <Box key={task.id} p={4} borderWidth="1px">
            <Text>
              <strong style={{ marginRight: "4dvw" }}>Title </strong>:{" "}
              {task.title}
            </Text>
            <Text>
              <strong style={{ marginRight: "0.9dvw" }}>Description </strong>:{" "}
              {task.description}
            </Text>
            <Text>
              <strong style={{ marginRight: "2.6dvw" }}>Priority </strong>:{" "}
              {task.priority}
            </Text>
            <Text>
              <strong style={{ marginRight: "3.2dvw" }}>Status </strong>:{" "}
              {task.status}
            </Text>
            <Text>
              <strong style={{ marginRight: "2dvw" }}>Deadline </strong>:{" "}
              {task.deadline}
            </Text>
            <Text>
              <strong style={{ marginRight: "2dvw" }}>Assignee </strong>:{" "}
              {task.assignee}
            </Text>
            <Text>
              <strong style={{ marginRight: "2dvw" }}>Members </strong>:{" "}
              {task.members?.map((member) => (
                <Text key={member.id}>{member}, </Text>
              ))}
            </Text>
            <Button
              colorScheme="red"
              onClick={() => handleDeleteTask(task.id)}
              mt={4}
            >
              Delete Task
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => handleEditTask(task.id)}
              ml={4}
              mt={4}
            >
              Edit Task
            </Button>
          </Box>
        ))}
      </Grid>
      {updatedTask && (
        <Box w={"30%"} margin={"5dvh auto 0"}>
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              type="text"
              id="title"
              name="title"
              value={updatedTask.title || ""}
              onChange={handleInputChange}
            />
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              type="text"
              id="description"
              name="description"
              value={updatedTask.description || ""}
              onChange={handleInputChange}
            />
            <FormLabel htmlFor="deadline">Deadline</FormLabel>
            <Input
              type="date"
              id="deadline"
              name="deadline"
              value={updatedTask.deadline || ""}
              onChange={handleInputChange}
            />
            <FormLabel htmlFor="assignee">Assignee</FormLabel>
            <Input
              type="text"
              id="assignee"
              name="assignee"
              value={updatedTask.assignee || ""}
              onChange={handleInputChange}
            />
            <Grid
              templateColumns={"repeat(2, 1fr)"}
              gap={"1rem"}
              my={5}
              alignItems={"center"}
            >
              <FormLabel
                fontSize={"1rem"}
                htmlFor="priority"
                fontWeight={"bold"}
              >
                Priority
              </FormLabel>
              <Button colorScheme="blue" onClick={() => setPriority(!priority)}>
                {priority ? "Urgent" : "Medium"}
              </Button>
              <FormLabel fontSize={"1rem"} fontWeight={"bold"} htmlFor="status">
                Status
              </FormLabel>
              <Button colorScheme="blue" onClick={() => setStatus(!status)}>
                {status ? "Done" : "Pending"}
              </Button>
            </Grid>
            <Button colorScheme="blue" mt={2} onClick={handleUpdateTask}>
              Update Task
            </Button>
            <Button
              colorScheme="gray"
              mt={2}
              onClick={() => setUpdatedTask(null)}
            >
              Cancel
            </Button>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default DisplayTask;
