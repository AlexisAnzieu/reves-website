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
                    <Link href="/" aria-label="back to acti homepage">
                        <NextImage
                            width="70px"
                            height="70px"
                            alt="logo acti"
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
                    <Link
                        _hover={{
                            textDecoration: "none",
                            color: "orange.400",
                        }}
                        href="/donations"
                    >
                        Nos dons
                    </Link>
                </Box>
                <Box p="4">
                    <a href="https://freezerland.notion.site/Donner-du-temps-9a4997e183714bffac6f9c613238e34f">
                        <Button
                            _hover={{
                                backgroundColor: "orange.400",
                            }}
                            colorScheme={"cyan"}
                            color={"white"}
                        >
                            Donner du temps
                        </Button>
                    </a>
                </Box>
            </Center>
        </Flex>
    );
}
