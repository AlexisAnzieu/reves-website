import { Container, Box, Heading } from "@chakra-ui/react";

export default function Popote() {
    return (
        <Container p={"30px"}>
            <Heading size={"lg"} pb={5}>
                Popote Roulante
            </Heading>
            <Box>
                <Heading size="md">✍️ S’inscrire </Heading>
                La première étape est de t’inscrire sur leur plateforme en tant
                que bénévole, tu recevras une rapide formation de 30 minutes
                dans les jours à venir. Ne traine pas car ces dernières sont
                bimensuelles. [Bénévolat au
                Roulant](https://santropolroulant.org/fr/devenir-benevole/)
                <Heading mt={5} size="md">
                    📦 Faire ton shift{" "}
                </Heading>
                Une fois la formation effectuée, tu seras invité.e à
                sélectionner les plages horaires auxquelles tu souhaiterais
                donner de ton temps. ⚠️ Il faut que cette plage horaire se situe
                AVANT la date de l’évènement.
                <Heading mt={5} size="md">
                    📸 Valider ton shift
                </Heading>
                Durant ton shift, prends-toi en photo devant une boite de
                nourriture Santropol, ou en train de préparer de la nourriture.
                Bref, tout ce qui nous prouve que tu as agis dans les règles de
                l’art. Envoie la à [allo@reve-s.net](mailto:allo@reve-s.net),
                nous te répondrons aussi vite que possible et nous activerons ta
                place! En te souhaitant une belle journée 💫
                <hr />
                Si tu as des questions ou que tu ne souhaites plus donner de ton
                temps (et libérer ainsi une place pour quelqu’un d’autre),
                n’hésite pas non plus à [nous envoyer un
                mail](mailto:allo@reve-s.net).
            </Box>
        </Container>
    );
}
