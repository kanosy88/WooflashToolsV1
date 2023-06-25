import { HStack, Input, Heading, Stack, Tooltip } from "@chakra-ui/react";

export default function IdComp({ onChangeId, onChangeKey }) {
  return (
    <Stack>
      <HStack>
        <Tooltip
          label={
            "Trouvable dans l'url du cours en question. Exemple: 1cdc39c4-8e4b-412a-9258-16a6eac558e7"
          }
        >
          <Heading size={"md"}>CourseID</Heading>
        </Tooltip>
        <Input onChange={onChangeId}></Input>
      </HStack>
      <HStack>
        <Tooltip
          label={
            "Cliquer sur le lien en dessous de cette page pour trouver comment avoir votre AuthKey. 'Comment ça marche?'"
          }
        >
          <Heading size={"md"}>AuthKey</Heading>
        </Tooltip>

        <Input onChange={onChangeKey}></Input>
      </HStack>
    </Stack>
  );
}
