import { Heading, Textarea, Stack, Box, Button } from "@chakra-ui/react";

export default function FlashCard({
  onChangeRecto,
  onChangeVerso,
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
        FlashCard Creator
      </Heading>
      <Box boxShadow={"dark-lg"} bg={"Alpha.200"} p={10} borderRadius={15}>
        <Stack>
          <Heading>Recto:</Heading>
          <Textarea
            onChange={onChangeRecto}
            placeholder={"La capitale de la France"}
          ></Textarea>
          <Heading>Verso:</Heading>
          <Textarea
            onChange={onChangeVerso}
            placeholder={"C'est Paris "}
          ></Textarea>
        </Stack>
        <Button my={5} onClick={onClick} isLoading={isLoading}>
          Envoyer
        </Button>
      </Box>
    </Stack>
  );
}
