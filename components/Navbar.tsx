import { Box, Button, Center, Flex, Link, Spacer } from "@chakra-ui/react";
import NextImage from "next/image";

export default function Navbar() {
    return (
        <Flex
            backgroundColor="white"
            position="sticky"
            boxShadow="md"
            w="100%"
            top="0"
            zIndex="100"
            h="70px"
        >
            <Center>
                <Box pl={2}>
                    <Link href="/">
                        <NextImage
                            width="70px"
                            height="70px"
                            alt="logo reve"
                            src="/favicon.png"
                        />
                    </Link>
                </Box>
            </Center>
            <Spacer />
            <Center>
                <Box
                    fontSize="1.3rem"
                    fontWeight={"bold"}
                    p="4"
                    color="#16CBFB"
                >
                    <Link href="/donations">Nos dons</Link>
                </Box>
                <Box p="4">
                    <Link href="/associations">
                        <Button colorScheme={"cyan"} color={"white"}>
                            Fais ton shift
                        </Button>
                    </Link>
                </Box>
            </Center>
        </Flex>
    );
}
