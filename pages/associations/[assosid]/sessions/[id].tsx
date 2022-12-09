import {
    Container,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { directus } from "../../../../helpers/directus";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { GetStaticPropsContext } from "next/types";

export default function Session({ activity }: any) {
    return (
        <Container p={"30px"}>
            <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink href="/associations">
                        Activités
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Santropol</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <div id="noStyle">
                <ReactMarkdown>{activity.description}</ReactMarkdown>
            </div>
        </Container>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { assosid: "santropol", id: "popote-roulante" } }],
        fallback: false,
    };
}

export async function getStaticProps(params: any) {
    console.log(params);
    const activity = await directus
        .items("activities")
        .readOne("3f8133b3-1864-4120-9572-6e84e067d132", {
            fields: ["title", "description"],
        });

    return {
        props: { activity },
    };
}
