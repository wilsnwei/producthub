import { Box, VStack, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
const HomePage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <VStack mx={10}>
      <Box padding={10} fontSize={30} fontWeight={500}>
        Current Products
      </Box>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        rowGap={10}
        columnGap={60}
      >
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default HomePage;
