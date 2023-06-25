import { HStack, Input, Heading } from "@chakra-ui/react";

export default function IdComp({ onChangeId }) {
  return (
    <HStack>
      <Heading size={"md"}>ID</Heading>
      <Input></Input>
    </HStack>
  );
}
