import { Container, Heading, Box } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Container pt={"70px"}>
            <Box className="gradient-text" fontWeight={"bold"}>
                <Heading size={"lg"} pb={5}>
                    Quel est l'objectif de Reve.s?
                </Heading>
                💭 S'épanouir en se gratifiant
                <Heading size={"lg"} pb={5} pt={10}>
                    Par quel biais?
                </Heading>
                💭 À travers l'organisation d'événements musicaux, nous
                souhaitons accompagner les participant.e.s à prendre conscience
                de leur environnement.
                <br /> <br />
                Distribution de repas le jour et direction le club la nuit? Nous
                souhaitons lier l'univers festif avec l'univers associatif.
                <Heading size={"lg"} pb={5} pt={10}>
                    Comment cela se concrétise-t-il?
                </Heading>
                💭 Conscient.es que l'argent est un outil, nous l'utilisons
                ainsi. Au moment de payer son billet, les participant.es ont le
                choix: payer en dollars ou payer en temps associatif.
                <Heading size={"lg"} pb={5} pt={10}>
                    Payer en temps associatif?
                </Heading>
                💭 Nous mettons à disposition des participant.es une liste de
                sessions organisées par des associations avec lesquelles nous
                sommes en lien. Sur place, un membre de REVE.S est en charge de
                son bon déroulement et de la présence de chaque participant. À
                la suite de l'activité, un crédit de temps associatif, appelé
                "sourire", sera ajouté sur leur compte. Ce sourire s'échange
                contre une place pour nos événements, et à terme ceux de nos
                partenaires.
                <Heading size={"lg"} pb={5} pt={10}>
                    Qui finance ce projet?
                </Heading>
                💭 Pour le moment, REVE.S est à 100% financé par des fonds
                personnels. Nous espérons à terme trouver un équilibre entre les
                différents acteurs afin de permettre une balance financière
                nulle, autofinancée par les agences évènementielles
                consciencieuses de l'activité locale.
                <Heading size={"lg"} pb={5} pt={10}>
                    Comment nous contacter?
                </Heading>
                💭 Tu es une agence, une association ou tout simplement curieux?
                Contacte-nous par email:{" "}
                <a href="mailto:allo@reve-s.net">allo@reve-s.net</a>
                <br />
                <br />
                <Heading textAlign={"right"} size={"md"} pb={5} pt={10}>
                    Merci d'avoir pris le temps de nous lire et à très vite!
                    <br />
                </Heading>
                <br /> <br />
            </Box>
        </Container>
    );
};

export default Home;
