import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Avatar, Input, Button, Divider, Spacer, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMjIwNTI0NXww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      content: "Just had an amazing day at the beach! #summer #goodvibes",
      likes: 25,
      comments: 5,
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMjIwNTI0NXww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      content: "Excited to announce that I just launched my new project! Check it out at https://example.com #newproject #launch",
      likes: 42,
      comments: 8,
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      const post = {
        id: posts.length + 1,
        user: {
          name: "Current User",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXJyZW50JTIwdXNlciUyMGF2YXRhcnxlbnwwfHx8fDE3MTIyMDUyNDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
        },
        content: newPost,
        likes: 0,
        comments: 0,
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <Heading mb={8}>SNS App</Heading>
      <Box mb={8}>
        <HStack>
          <Avatar src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjdXJyZW50JTIwdXNlciUyMGF2YXRhcnxlbnwwfHx8fDE3MTIyMDUyNDV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Input value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="What's on your mind?" />
          <Button onClick={handlePostSubmit} colorScheme="blue">
            Post
          </Button>
        </HStack>
      </Box>
      <VStack spacing={8}>
        {posts.map((post) => (
          <Box key={post.id} w="100%">
            <HStack mb={4}>
              <Avatar src={post.user.avatar} />
              <Text fontWeight="bold">{post.user.name}</Text>
            </HStack>
            <Text mb={4}>{post.content}</Text>
            <HStack>
              <HStack>
                <IconButton icon={<FaHeart />} variant="ghost" aria-label="Like" />
                <Text>{post.likes}</Text>
              </HStack>
              <HStack>
                <IconButton icon={<FaComment />} variant="ghost" aria-label="Comment" />
                <Text>{post.comments}</Text>
              </HStack>
              <Spacer />
              <IconButton icon={<FaShare />} variant="ghost" aria-label="Share" />
            </HStack>
            <Divider my={4} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
