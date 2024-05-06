import { Box, Flex, Heading, Text, VStack, Link, IconButton, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box maxW="container.xl" mx="auto" p={5}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" p={5}>
        <Heading as="h1" size="xl">John Doe</Heading>
        <HStack spacing={4}>
          <Link href="https://github.com" isExternal><IconButton aria-label="GitHub" icon={<FaGithub />} /></Link>
          <Link href="https://linkedin.com" isExternal><IconButton aria-label="LinkedIn" icon={<FaLinkedin />} /></Link>
          <Link href="mailto:john.doe@example.com"><IconButton aria-label="Email" icon={<FaEnvelope />} /></Link>
        </HStack>
      </Flex>
      <VStack spacing={8} mt={10}>
        <Box id="about" p={5}>
          <Heading as="h2" size="lg">About</Heading>
          <Text mt={3}>John Doe is a professional software developer with over 10 years of experience in building scalable applications. Specializing in modern web technologies and passionate about clean code and user-centric design.</Text>
        </Box>
        <Box id="projects" p={5}>
          <Heading as="h2" size="lg">Projects</Heading>
          <Text mt={3}>Notable projects include a real-time collaborative platform, an e-commerce website, and a mobile app for event management. Each project showcases a commitment to efficient, scalable, and user-friendly solutions.</Text>
        </Box>
        <Box id="skills" p={5}>
          <Heading as="h2" size="lg">Skills</Heading>
          <Text mt={3}>Proficient in: JavaScript, React, Node.js, Python. Familiar with: Docker, Kubernetes, AWS.</Text>
        </Box>
        <Box id="contact" p={5}>
          <Heading as="h2" size="lg">Contact</Heading>
          <VStack spacing={3}>
            <Text>If you have any projects or opportunities, don't hesitate to reach out!</Text>
            <Link href="mailto:john.doe@example.com"><IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" /></Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;