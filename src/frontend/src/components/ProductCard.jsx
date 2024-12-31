import {
  Box,
  VStack,
  Button,
  GridItem,
  Text,
  Image,
  Heading,
  Input,
} from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useProductStore } from "../store/product";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  return (
    <GridItem>
      <Image width="full" height="200px" rounded="md" src={product.image} />
      <Heading>{product.name}</Heading>
      <Text>${product.price}</Text>
      <Box>
        <DialogRoot role="alertdialog">
          <DialogTrigger asChild>
            <Button mt={3} mr={3}>
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p>
                This will delete your product from <thead></thead> database.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button
                onClick={() => deleteProduct(product._id)}
                colorPalette="red"
              >
                Delete
              </Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
        <DialogRoot>
          <DialogTrigger asChild>
            <Button mt={3}>Update</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <VStack>
                <Input
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  value={updatedProduct.price}
                  onChange={(e) => {
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    });
                    console.log(updatedProduct);
                  }}
                />
                <Input
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </VStack>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button
                onClick={() => {
                  updateProduct(updatedProduct);
                }}
              >
                Save
              </Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
      </Box>
    </GridItem>
  );
};
