import { HStack, Input, Heading, Stack } from "@chakra-ui/react";

export default function IdComp({ onChangeId, onChangeKey }) {
  return (
    <Stack>
      <HStack>
        <Heading size={"md"}>CourseID</Heading>
        <Input onChange={onChangeId}></Input>
      </HStack>
      <HStack>
        <Heading size={"md"}>AuthKey</Heading>
        <Input onChange={onChangeKey}></Input>
      </HStack>
    </Stack>
  );
}
