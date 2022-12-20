import {
    Box,
    Container,
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

export default function Donations() {
    const donations = [
        {
            name: "Santropol Roulant",
            url: "https://santropolroulant.org/fr/",
            date: "20 décembre 2022",
            amount: 300,
            documentUrl: "/SI2-0012187-0002810-ANZIEU-ALEXIS.pdf",
        },
        {
            name: "Zeffy",
            url: "https://www.zeffy.com/",
            date: "20 décembre 2022",
            amount: 23.95,
            documentUrl: null,
        },
        {
            name: "Santropol Roulant",
            url: "https://santropolroulant.org/fr/",
            date: "30 juin 2022",
            amount: 300,
            documentUrl: "/SI2-0012187-0002524-ANZIEU-ALEXIS.pdf",
        },
        {
            name: "Zeffy",
            url: "https://www.zeffy.com/",
            date: "30 juin 2022",
            amount: 15,
            documentUrl: null,
        },
    ];

    return (
        <Container p={"30px"}>
            <Box pb={30} textAlign={"center"}>
                <Stat>
                    <StatLabel>À ce jour, nous avons distribué</StatLabel>
                    <StatNumber>9</StatNumber>
                    <StatHelpText>places associatives</StatHelpText>
                    <StatLabel>&</StatLabel>
                    <StatNumber>
                        {donations
                            .map((d) => d.amount)
                            .reduce((acc, amount) => acc + amount)}{" "}
                        $
                    </StatNumber>
                    <StatHelpText>
                        à {donations.length} associations
                    </StatHelpText>
                </Stat>
            </Box>
            <Box pb={30}>
                <Chart
                    type="line"
                    data={{
                        labels: [
                            "Avril",
                            "Mai",
                            "Juin",
                            "Juillet",
                            "Aout",
                            "Septembre",
                            "Octobre",
                            "Novembre",
                            "Décembre",
                        ],
                        datasets: [
                            {
                                backgroundColor: "#dd6b20",
                                fill: true,
                                borderColor: "#dd6b20",
                                label: "donations cumulées en $",
                                data: [
                                    "0",
                                    "0",
                                    "315",
                                    "315",
                                    "315",
                                    "315",
                                    "315",
                                    "315",
                                    "638.95",
                                ],
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
                                <Th isNumeric>Montant</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {donations.map((donation) => (
                                <Tr key={donation.name}>
                                    <Td>
                                        <a href={donation.url}>
                                            {donation.name}
                                        </a>
                                    </Td>
                                    <Td>{donation.date}</Td>
                                    <Td>
                                        {donation.documentUrl && (
                                            <a
                                                href={
                                                    "receipt_donations/" +
                                                    donation.documentUrl
                                                }
                                            >
                                                <Button
                                                    colorScheme="orange"
                                                    size="xs"
                                                >
                                                    télécharger
                                                </Button>
                                            </a>
                                        )}
                                    </Td>
                                    <Td isNumeric>{donation.amount}$</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}
