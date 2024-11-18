import {
  Container,
  Heading,
  Box,
  VStack,
  Text,
  useColorModeValue,
  Fade,
  SlideFade,
  Link,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const QuestionCard = ({
  question,
  answer,
  index = 0,
}: {
  question: string;
  answer: React.ReactNode;
  index?: number;
}) => {
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <SlideFade in={true} offsetY={20} delay={index * 0.1}>
      <Box
        p={8}
        my={6}
        bg={bgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow="xl"
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "2xl",
          borderColor: "blue.200",
        }}
      >
        <Heading
          size="md"
          mb={4}
          color={useColorModeValue("gray.700", "white")}
        >
          {question}
        </Heading>
        <Text fontSize="lg" lineHeight="1.8">
          {answer}
        </Text>
      </Box>
    </SlideFade>
  );
};

const Home: NextPage = () => {
  const emailLink = (
    <Link
      href="mailto:allo@reve-s.net"
      color="blue.400"
      fontWeight="medium"
      _hover={{
        color: "blue.500",
        textDecoration: "none",
      }}
    >
      allo@reve-s.net
    </Link>
  );

  return (
    <Box w="100%" minH="100vh" bgGradient="linear(to-b, blue.50, purple.50)">
      <Container maxW="container.md" py={28} px={6}>
        <Fade in={true}>
          <Box textAlign="center" mb={10}>
            <Heading
              as="h1"
              size="2xl"
              className="gradient-text"
              mb={5}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              Bienvenue chez Reve.s
            </Heading>
            <Text fontSize="xl" opacity={0.8} letterSpacing="wide">
              Où la fête rencontre l'engagement social
            </Text>
          </Box>
        </Fade>

        <VStack spacing={8} align="stretch">
          <QuestionCard
            index={0}
            question="Quel est l'objectif de Reve.s?"
            answer="💭 S'épanouir"
          />

          <QuestionCard
            index={1}
            question="Par quel biais?"
            answer={
              <>
                💭 À travers l'organisation d'événements musicaux, nous
                souhaitons accompagner les participant.e.s à prendre conscience
                de leur environnement.
                <br />
                <br />
                Distribution de repas le jour et direction le club la nuit? Nous
                souhaitons lier l'univers festif avec l'univers associatif.
              </>
            }
          />

          <QuestionCard
            index={2}
            question="Comment cela se concrétise-t-il?"
            answer={
              <>
                💭 Conscient.es que l'argent est un outil, nous l'utilisons
                ainsi. Au moment de payer son billet, les participant.es ont le
                choix: payer en dollars ou payer en temps associatif.
              </>
            }
          />

          <QuestionCard
            index={3}
            question="Payer en temps associatif?"
            answer={
              <>
                💭 Nous mettons à disposition des participant.es une liste de
                sessions organisées par des associations avec lesquelles nous
                sommes en lien. Sur place ou en ligne, un membre de REVE.S est
                en charge de son bon déroulement et de la présence de chaque
                participant.
              </>
            }
          />

          <QuestionCard
            index={4}
            question="Qui finance ce projet?"
            answer={
              <>
                💭 Pour le moment, REVE.S est une OBNL 100% financée par des
                fonds personnels. Nous espérons à terme trouver un équilibre
                entre les différents acteurs afin de permettre une balance
                financière nulle, autofinancée par les agences évènementielles
                consciencieuses de l'activité locale.
              </>
            }
          />

          <QuestionCard
            index={5}
            question="Comment nous contacter?"
            answer={
              <>
                💭 Tu es une agence, une association ou tout simplement
                curieux.se? Contacte-nous par email: {emailLink}
              </>
            }
          />

          <Box textAlign="center" mt={20}>
            <Heading size="md" mb={6}>
              Merci d'avoir pris le temps de nous lire et à très vite!
            </Heading>
            {emailLink}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
