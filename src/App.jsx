import { useState } from "react";
import "./App.css";
import { Container, Divider, Heading, useToast } from "@chakra-ui/react";
import FlashCard from "./compenents/FlashCardCreator";
import IdComp from "./compenents/IdInput";
import MultiFlashCardCreator from "./compenents/MulitFlashCardCreator";
import sendRequest from "./compenents/sendRequest";

function App() {
  const [count, setCount] = useState(0);
  const [messageRecto, setMessageRecto] = useState("Bonsoir");
  const [messageVerso, setMessageVerso] = useState("Bonjour");
  const [courseID, setCourseID] = useState("b2d712be-bb78-44cd-9b14");
  const [bigMessage, setBigMessage] = useState("Bonsoir:Bonjour");
  const [lock, setLock] = useState(false);

  const handleChangeRecto = (event) => {
    setMessageRecto(event.target.value);
  };

  const handleChangeVerso = (event) => {
    setMessageVerso(event.target.value);
  };

  const handleChangeID = (event) => {
    setCourseID(event.target.value);
  };

  const handleBigMessageChange = (event) => {
    setBigMessage(event.target.value);
  };

  const coolDownDuration = 2500; //in millisecond

  const toast = useToast();

  const SuccesToast = (title, description) => {
    toast({
      title: title,
      description: description,
      status: "success",
      duration: coolDownDuration,
      isClosable: false,
    });
  };

  const SendMessage = () => {
    setLock(true);
    sendRequest(messageRecto, messageVerso, courseID);

    SuccesToast(
      "Votre question à été créer avec succès",
      "Redémarer la page Wooflash pour voir les modification"
    );
    setTimeout(() => {
      setLock(false);
    }, coolDownDuration);
  };

  const CutMessage = () => {
    setLock(true);
    let lines = bigMessage.split("\n");
    lines.map((line) => {
      let parts = line.trim().split(":");
      let recto = parts[0];
      let verso = parts[1];
      sendRequest(recto, verso, courseID);
    });

    SuccesToast(
      "Vos question on été envoyer avec succès",
      "Redémarer la page Wooflash pour voir les modification"
    );
    setTimeout(() => {
      setLock(false);
    }, coolDownDuration);
  };

  return (
    <Container>
      <Heading
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        bgClip="text"
        textAlign={"center"}
      >
        Wooflash Tools
      </Heading>
      <IdComp onChangeId={handleChangeID} />
      <Divider my={10}></Divider>
      <FlashCard
        onChangeRecto={handleChangeRecto}
        onChangeVerso={handleChangeVerso}
        onClick={SendMessage}
        isLoading={lock}
      />

      <Divider my={10} />
      <MultiFlashCardCreator
        onChangeMultiRectoVerso={handleBigMessageChange}
        onClick={CutMessage}
        isLoading={lock}
      />
    </Container>
  );
}

export default App;
