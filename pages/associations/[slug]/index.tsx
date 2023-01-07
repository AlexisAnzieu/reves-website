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
import { directus } from "../../../helpers/directus";
import { GetStaticPropsContext } from "next";

export default function Association({ slug, title, activities }: any) {
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
                    <BreadcrumbLink href="#">{title}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                {activities.map((activity: any) => {
                    return (
                        <Card
                            key={activity.slug}
                            shadow={
                                activity.status === "published" ? "xl" : "sm"
                            }
                            maxW="sm"
                        >
                            <CardBody>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        {activity.title}
                                    </Heading>
                                    <Text noOfLines={5}>
                                        {activity.card_description}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            {activity.status === "published" && (
                                <CardFooter>
                                    <ButtonGroup spacing="2">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            href={`/associations/${slug}/${activity.slug}`}
                                        >
                                            <Button
                                                _hover={{
                                                    backgroundColor:
                                                        "orange.400",
                                                }}
                                                color={"white"}
                                                colorScheme="cyan"
                                            >
                                                Voir le processus
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </CardFooter>
                            )}
                        </Card>
                    );
                })}
            </SimpleGrid>
        </Container>
    );
}

export async function getStaticPaths() {
    const { data: associations }: any = await directus
        .items("associations")
        .readByQuery({
            fields: ["slug"],
        });

    return {
        paths: associations.map((association: any) => ({
            params: {
                slug: association.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps(
    context: GetStaticPropsContext & {
        params: {
            slug: string;
        };
    }
) {
    const { data: association }: any = await directus
        .items("associations")
        .readByQuery({
            filter: { slug: { _eq: context.params.slug } },
            fields: [
                "slug",
                "title",
                "activities.status",
                "activities.title",
                "activities.slug",
                "activities.card_description",
            ],
        });

    return {
        props: association[0],
    };
}
