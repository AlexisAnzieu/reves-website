import { Container, Box, Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { directus } from "../../../helpers/directus";

export async function getStaticProps() {
    const activity = await directus
        .items("activities")
        .readOne("3f8133b3-1864-4120-9572-6e84e067d132", {
            fields: ["title", "description"],
        });

    return {
        props: { activity },
    };
}

export default function Popote({ activity }: any) {
    return (
        <Container p={"30px"}>
            <Heading size={"lg"} pb={5}>
                {activity.title}
            </Heading>
            <div id="noStyle">
                <ReactMarkdown>{activity.description}</ReactMarkdown>
            </div>
        </Container>
    );
}
