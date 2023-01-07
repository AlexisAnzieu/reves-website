import {
    Container,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Stack,
    Link,
    Text,
    SimpleGrid,
    Box,
} from "@chakra-ui/react";
import { directus } from "../../helpers/directus";

export default function Associations({ associations }: any) {
    return (
        <Container p={"30px"}>
            <Heading size={"lg"} pb={5}>
                Associations
            </Heading>
            <Box mb={10}>
                Choisis l'association pour laquelle tu souhaiterais donner de
                ton temps
            </Box>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                {associations.map((association: any) => {
                    return (
                        <Card key={association.slug} shadow={"xl"} maxW="sm">
                            <CardBody>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        {association.title}
                                    </Heading>
                                    <Text noOfLines={5}>
                                        {association.description}
                                    </Text>
                                    <Link
                                        textDecoration={"underline"}
                                        href={association.websiteUrl}
                                    >
                                        En savoir plus
                                    </Link>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing="2">
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        href={`/associations/${association.slug}`}
                                    >
                                        <Button
                                            _hover={{
                                                backgroundColor: "orange.400",
                                            }}
                                            color={"white"}
                                            colorScheme="cyan"
                                        >
                                            Voir les sessions
                                        </Button>
                                    </Link>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    );
                })}
                <Card maxW="sm" shadow={"sm"}>
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">La tienne?</Heading>
                            <Text noOfLines={5}>
                                Tu as besoin de bénévoles pour des activités
                                spécifiques? N'hésite pas à nous contacter!
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing="2">
                            <Link
                                style={{ textDecoration: "none" }}
                                href="mailto:allo@reve-s.net"
                            >
                                <Button
                                    _hover={{
                                        backgroundColor: "orange.400",
                                    }}
                                    color={"white"}
                                    colorScheme="cyan"
                                >
                                    Nous envoyer un mail
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Container>
    );
}

export async function getStaticProps() {
    const { data: associations } = await directus
        .items("associations")
        .readByQuery();

    return {
        props: { associations },
    };
}
