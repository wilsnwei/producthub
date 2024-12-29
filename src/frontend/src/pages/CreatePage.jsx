import { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleSubmit = async () => {
    const { success, message } = await createProduct(newProduct);
    setNewProduct({ name: "", price: "", image: "" });
    console.log({ Success: success, Message: message });
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create a Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack>
            <Input
              variant="outline"
              placeholder="Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => {
                setNewProduct({ ...newProduct, name: e.target.value });
              }}
            />
            <Input
              variant="outline"
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => {
                setNewProduct({ ...newProduct, price: e.target.value });
              }}
            />
            <Input
              variant="outline"
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => {
                setNewProduct({ ...newProduct, image: e.target.value });
              }}
            />
            <Button onClick={handleSubmit}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
