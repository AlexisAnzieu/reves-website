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
} from "@chakra-ui/react";

export default function Sessions() {
    return (
        <Container p={"30px"}>
            <Heading size={"lg"} pb={5}>
                Popote roulante
            </Heading>
            <SimpleGrid minChildWidth="200px" spacing={10}>
                <Card maxW="sm">
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">Popote roulante</Heading>
                            <Text noOfLines={5}>
                                Les livraisons de repas sont effectuées en vélo,
                                en bus, en voiture ou à pied, dans différents
                                quartiers qui entourent le mont Royal. Les
                                bénévoles sont généralement rassemblés en groupe
                                de deux (ou peuvent également être seuls, au
                                besoin), et les routes durent environ 3 heures,
                                du début à la fin.
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing="2">
                            <Link href="/associations/activities/popote-roulante">
                                <Button color={"white"} colorScheme="cyan">
                                    Voir le processus
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Container>
    );
}
