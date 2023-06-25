import { Heading, Textarea, Stack, Box, Button } from "@chakra-ui/react";

export default function MultiFlashCardCreator({
  onChangeMultiRectoVerso,
  onClick,
  isLoading,
}) {
  return (
    <Stack>
      <Heading
        bgGradient={"linear(to-l, #ff930f, #fff95b)"}
        bgClip="text"
        textAlign={"center"}
      >
        MultiFlashCard Creator
      </Heading>
      <Box boxShadow={"dark-lg"} bg={"Alpha.200"} p={10} borderRadius={15}>
        <Textarea
          onChange={onChangeMultiRectoVerso}
          placeholder={
            "La capitale de la France:C'est Paris \nLa capitale de la Belgigue:C'est Bruxelle \nLa capitale de l'Allemange:C'est Berlin \n"
          }
        ></Textarea>
        <Button my={5} onClick={onClick} isLoading={isLoading}>
          Envoyer
        </Button>
      </Box>
    </Stack>
  );
}
