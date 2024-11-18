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
      name: "Fondation INCA pour les Non-voyants",
      url: "https://www.inca.ca/fr?region=qc",
      date: "18 novembre 2024",
      amount: 300,
      documentUrl: "/inca.pdf",
    },
    {
      name: "Réseau Enfants-Retour",
      url: "https://www.reseauenfantsretour.ong/",
      date: "19 juillet 2023",
      amount: 225,
      documentUrl: "/enfantRetour.pdf",
    },
    {
      name: "Le Chainon",
      url: "https://lechainon.org/",
      date: "19 juin 2023",
      amount: 300,
      documentUrl: "/lechainon.pdf",
    },
    {
      name: "Réseau Enfants-Retour",
      url: "https://www.reseauenfantsretour.ong/",
      date: "19 juin 2023",
      amount: 225,
      documentUrl: "/enfantRetour.pdf",
    },
    {
      name: "Centre des femmes de Montréal",
      url: "https://centredesfemmesdemtl.org/",
      date: "19 mai 2023",
      amount: 250,
      documentUrl: "/centrefemme.pdf",
    },
    {
      name: "Partage & Solidarité",
      url: "https://www.facebook.com/equipeatlantide",
      date: "19 mai 2023",
      amount: 250,
      documentUrl: "/recucharite.pdf",
    },
    {
      name: "Santropol Roulant",
      url: "https://santropolroulant.org/fr/",
      date: "19 février 2023",
      amount: 200,
      documentUrl: "/SI2-0012187-0002989-ANZIEU-ALEXIS.pdf",
    },
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
  ].reverse();

  const labels = donations.map((donation) => donation.date);
  const cumulativeAmounts = donations.reduce((acc: number[], donation) => {
    const lastAmount = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(lastAmount + donation.amount);
    return acc;
  }, []);

  return (
    <Container p={"30px"}>
      <Box pb={30} textAlign={"center"}>
        <Stat>
          <StatLabel>À ce jour, nous avons distribué</StatLabel>
          <StatNumber>24</StatNumber>
          <StatHelpText>places associatives</StatHelpText>
          <StatLabel>&</StatLabel>
          <StatNumber>
            {donations
              .map((d) => d.amount)
              .reduce((acc, amount) => acc + amount)}{" "}
            $
          </StatNumber>
          <StatHelpText>
            à {[...new Set(donations.flatMap((d) => d.name))].length}{" "}
            associations
          </StatHelpText>
        </Stat>
      </Box>
      <Box pb={30}>
        <Chart
          type="line"
          data={{
            labels: labels,
            datasets: [
              {
                backgroundColor: "#dd6b20",
                fill: true,
                borderColor: "#dd6b20",
                label: "donations cumulées en $",
                data: cumulativeAmounts,
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
                <Th>Reçu</Th>
                <Th isNumeric>Montant</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {donations.map((donation) => (
                <Tr key={donation.name}>
                  <Td>
                    <a href={donation.url}>{donation.name}</a>
                  </Td>
                  <Td>
                    {donation.documentUrl && (
                      <a href={"receipt_donations/" + donation.documentUrl}>
                        <Button colorScheme="orange" size="xs">
                          télécharger
                        </Button>
                      </a>
                    )}
                  </Td>
                  <Td isNumeric>{donation.amount}$</Td>
                  <Td>{donation.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
