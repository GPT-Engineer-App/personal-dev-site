import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Button, IconButton, HStack, Text } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Index from "./pages/Index.jsx";

const Navbar = () => (
  <Box as="nav" bg="gray.100" p={4}>
    <Flex justify="space-between" maxW="container.xl" mx="auto">
      <Link href="#about" p={2}>About</Link>
      <Link href="#projects" p={2}>Projects</Link>
      <Link href="#skills" p={2}>Skills</Link>
      <Link href="#contact" p={2}>Contact</Link>
    </Flex>
  </Box>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Footer = () => (
  <Box as="footer" bg="gray.100" p={4} mt={10}>
    <Flex justify="space-between" maxW="container.xl" mx="auto">
      <Text>© 2023 John Doe. All rights reserved.</Text>
      <HStack spacing={4}>
        <Link href="https://twitter.com" isExternal><IconButton aria-label="Twitter" icon={<FaTwitter />} /></Link>
        <Link href="https://facebook.com" isExternal><IconButton aria-label="Facebook" icon={<FaFacebook />} /></Link>
        <Link href="https://instagram.com" isExternal><IconButton aria-label="Instagram" icon={<FaInstagram />} /></Link>
      </HStack>
      <Link href="#privacy-policy" p={2}>Privacy Policy</Link>
    </Flex>
  </Box>
);

export default App;