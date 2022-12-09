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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Association() {
    return (
        <Container p={"30px"}>
            <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink href="/associations">
                        Associations
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Santropol Roulant</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                <Card shadow={"xl"} maxW="sm">
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
                            <Link
                                style={{ textDecoration: "none" }}
                                href="/associations/santropol-roulant/popote-roulante"
                            >
                                <Button
                                    _hover={{
                                        backgroundColor: "orange.400",
                                    }}
                                    color={"white"}
                                    colorScheme="cyan"
                                >
                                    Voir le processus
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card shadow={"sm"} maxW="sm">
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">En cuisine</Heading>
                            <Text noOfLines={5}>
                                Cette session est en cours de test et sera
                                disponible bientôt!
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
            </SimpleGrid>
        </Container>
    );
}
