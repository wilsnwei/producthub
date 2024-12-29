import { VStack, Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
const HomePage = () => {
  const { products, fetchProducts, deleteProduct } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <VStack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        gap={60}
      >
        {products.map((product) => {
          return (
            <GridItem key={product._id}>
              {product.name} <br />
              Price: {product.price}
              <img className="product-image" width={200} src={product.image} />
              <Button marginTop={9} marginRight={3}>
                Update
              </Button>
              <Button marginTop={9} onClick={() => deleteProduct(product._id)}>
                Delete
              </Button>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default HomePage;
