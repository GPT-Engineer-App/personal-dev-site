import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Button } from '@chakra-ui/react';
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
    </Router>
  );
}

export default App;