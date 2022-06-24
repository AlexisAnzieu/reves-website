import { Center, Container, Heading } from "@chakra-ui/react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function Finances() {
    return (
        <Container p={"30px"}>
              <Heading>En cours de dévelopement...</Heading>{" "}
            {/* <Center>
                <Chart
                    type="line"
                    data={{
                        labels: ["Juin"],
                        datasets: [
                            {
                                backgroundColor: "red",
                                label: "donations",
                                data: ["550$"],
                            },
                        ],
                    }}
                /> */}
            </Center>
        </Container>
    );
}
