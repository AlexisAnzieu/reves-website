import { Box, Center, chakra, Flex, Icon } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
    return (
        <Center>
            <Flex h="70px" mb={30}>
                <Box fontSize="3rem" fontWeight={"bold"} color="#16CBFB">
                    <chakra.a
                        p="4"
                        _hover={{
                            textDecoration: "none",
                            color: "orange.400",
                        }}
                        href="https://www.instagram.com/reve.s_event/"
                    >
                        <Icon as={BsInstagram} />
                    </chakra.a>
                    <chakra.a
                        p="4"
                        _hover={{
                            textDecoration: "none",
                            color: "orange.400",
                        }}
                        href="mailto:allo@reve-s.net"
                    >
                        <Icon as={MdOutlineEmail} />
                    </chakra.a>
                </Box>
            </Flex>
        </Center>
    );
}
