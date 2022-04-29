import { Box, Button } from "@chakra-ui/react";
export default function Navbar() {
    return (
        <Box position={"fixed"} right={0} bg={"white"} m={4}>
            <a
                style={{
                    textDecoration: "none",
                }}
                href="https://app.reve-s.net"
            >
                <Button colorScheme={"cyan"} color={"white"}>
                    Accéder à l'app
                </Button>
            </a>
        </Box>
    );
}
