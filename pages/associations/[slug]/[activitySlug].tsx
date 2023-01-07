import {
    Container,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { directus } from "../../../helpers/directus";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Session({ description, title, association }: any) {
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

                <BreadcrumbItem>
                    <BreadcrumbLink href="/associations/santropol-roulant">
                        {association.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">{title}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <div id="noStyle">
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        </Container>
    );
}

export async function getStaticPaths() {
    const { data: associations }: any = await directus
        .items("associations")
        .readByQuery({
            fields: ["slug", "activities.slug"],
        });

    return {
        paths: associations.flatMap((association: any) =>
            association.activities.map((activity: any) => ({
                params: {
                    slug: association.slug,
                    activitySlug: activity.slug,
                },
            }))
        ),
        fallback: false,
    };
}

export async function getStaticProps(params: any) {
    const activity = await directus
        .items("activities")
        .readByQuery({
            filter: {
                slug: {
                    _eq: params.params.activitySlug,
                },
            },
            fields: ["title", "description", "association.title"],
        })
        .then((res: any) => res.data[0]);

    return {
        props: activity,
    };
}
