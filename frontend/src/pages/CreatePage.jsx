import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});
	const toast = useToast();

	const { createProduct } = useProductStore();
	const navigate = useNavigate();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
			// Navigate to Home on success
			navigate("/");
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<Container maxW={"container.sm"} py={12}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={{ base: "xl", md: "2xl" }} textAlign={"center"} mb={2}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={{ base: 5, md: 6 }} rounded={"xl"} shadow={"lg"}>
					<VStack spacing={5}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button variant='primary' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};
export default CreatePage;