import {
    Box,
    Center,
    Container,
    Heading,
    Stat,
    Button,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function Finances() {
    const donations = [
        {
            name: "Santropol roulant",
            url: "https://santropolroulant.org/fr/",
            date: "30 juin 2022",
            amount: 315,
            documentUrl: "/SI2-0012187-0002524-ANZIEU-ALEXIS.pdf",
        },
    ];
    return (
        <Container p={"30px"}>
            <Box pb={30} textAlign={"center"}>
                <Stat>
                    <StatLabel>À ce jour, nous avons distribué</StatLabel>
                    <StatNumber>315 $</StatNumber>
                    <StatHelpText>à 1 association</StatHelpText>
                </Stat>
            </Box>
            <Box pb={30}>
                <Chart
                    type="line"
                    data={{
                        labels: ["Avril", "Mai", "Juin", "Juillet"],
                        datasets: [
                            {
                                backgroundColor: "#0CC5EA",
                                fill: true,
                                borderColor: "#0CC5EA",
                                label: "donations cumulées en $",
                                data: ["0", "0", "315", "315"],
                            },
                        ],
                    }}
                />
            </Box>
            <Box>
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Nom</Th>
                                <Th>Date</Th>
                                <Th>Reçu</Th>
                                <Th isNumeric>$</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {donations.map((donation) => (
                                <Tr key={donation.documentUrl}>
                                    <Td>
                                        <a href={donation.url}>
                                            {donation.name}
                                        </a>
                                    </Td>
                                    <Td>{donation.date}</Td>
                                    <Td>
                                        <a href={donation.documentUrl}>
                                            <Button
                                                colorScheme="orange"
                                                size="xs"
                                            >
                                                télécharger
                                            </Button>
                                        </a>
                                    </Td>
                                    <Td isNumeric>{donation.amount}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}
