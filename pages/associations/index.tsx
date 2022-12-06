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

export default function Sessions() {
    return (
        <Container p={"30px"}>
            <Heading size={"lg"} pb={5}>
                Associations
            </Heading>
            <Box mb={10}>
                Choisis l'association pour laquelle tu souhaiterais donner de
                ton temps
            </Box>
            <SimpleGrid minChildWidth="200px" spacing={2}>
                <Card maxW="sm">
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">Santropol Roulant</Heading>
                            <Text noOfLines={5}>
                                Santropol Roulant est un centre alimentaire et
                                une communauté intergénérationnelle. En faisant
                                pousser de la nourriture, en la préparant, et en
                                la livrant aux Montréalaises et Montréalais,
                                nous créons un continuum de services inspirants
                                et engageants au bénéfice de la communauté, et
                                nous renforçons le tissu social montréalais en
                                faisant grandir la sécurité alimentaire en ville
                                et l’inclusion sociale.{" "}
                            </Text>
                            <Link
                                textDecoration={"underline"}
                                href="https://santropolroulant.org/fr/"
                            >
                                En savoir plus
                            </Link>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing="2">
                            <Link href="/associations/activities">
                                <Button color={"white"} colorScheme="cyan">
                                    Voir les activités
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card maxW="sm">
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">La votre?</Heading>
                            <Text noOfLines={5}>
                                Vous avez besoin de bénévoles pour vos
                                activités? N'hésitez pas à nous contacter!
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing="2">
                            <Link href="/activities">
                                <Button color={"white"} colorScheme="cyan">
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
