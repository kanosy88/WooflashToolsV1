import { useState } from 'react';
import './App.css';
import {
  ChakraProvider,
  Container,
  Divider,
  Heading,
  useToast,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import FlashCard from './compenents/FlashCardCreator';
import IdComp from './compenents/IdInput';
import MultiFlashCardCreator from './compenents/MulitFlashCardCreator';
import sendRequest from './compenents/sendRequest';

function App() {
  const [count, setCount] = useState(0);
  const [messageRecto, setMessageRecto] = useState('Bonsoir');
  const [messageVerso, setMessageVerso] = useState('Bonjour');
  const [courseID, setCourseID] = useState('b2d712be-bb78-44cd-9b14');
  const [userAuth, setUserAuth] = useState('');
  const [bigMessage, setBigMessage] = useState('Bonsoir:Bonjour');
  const [lock, setLock] = useState(false);
  const [isHelpOpen, setHelpState] = useState(false);

  const toggleHelpSlide = () => {
    setHelpState(!isHelpOpen);
    console.log(isHelpOpen);
  };

  const handleChangeRecto = (event) => {
    setMessageRecto(event.target.value);
  };

  const handleChangeVerso = (event) => {
    setMessageVerso(event.target.value);
  };

  const handleChangeID = (event) => {
    setCourseID(event.target.value);
  };

  const handleChangeUserAuth = (event) => {
    setUserAuth(event.target.value);
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
      status: 'success',
      duration: coolDownDuration,
      isClosable: false,
    });
  };

  const SendMessage = () => {
    setLock(true);
    sendRequest(messageRecto, messageVerso, courseID, userAuth);

    SuccesToast(
      'Votre question à été créer avec succès',
      'Redémarer la page Wooflash pour voir les modification'
    );
    setTimeout(() => {
      setLock(false);
    }, coolDownDuration);
  };

  const CutMessage = () => {
    setLock(true);
    let lines = bigMessage.split('\n');
    lines.map((line) => {
      let parts = line.trim().split(':');
      let recto = parts[0];
      let verso = parts[1];
      sendRequest(recto, verso, courseID, userAuth);
    });

    SuccesToast(
      'Vos question on été envoyer avec succès',
      'Redémarer la page Wooflash pour voir les modification'
    );
    setTimeout(() => {
      setLock(false);
    }, coolDownDuration);
  };

  return (
    <ChakraProvider>
      <Container>
        <Tooltip label="Fait par kanosy" fontSize="md">
          <Heading
            bgGradient={'linear(to-l, #7928CA, #FF0080)'}
            bgClip="text"
            textAlign={'center'}
          >
            Wooflash Tools
          </Heading>
        </Tooltip>

        <IdComp
          onChangeId={handleChangeID}
          onChangeKey={handleChangeUserAuth}
        />
        <Divider my={10} boxShadow=" 0px 0px 36px 8px #7928CA"></Divider>
        <FlashCard
          onChangeRecto={handleChangeRecto}
          onChangeVerso={handleChangeVerso}
          onClick={SendMessage}
          isLoading={lock}
        />

        <Divider my={10} boxShadow="  0px 0px 36px 8px #7928CA" />
        <MultiFlashCardCreator
          onChangeMultiRectoVerso={handleBigMessageChange}
          onClick={CutMessage}
          isLoading={lock}
        />
        <Divider my={10} boxShadow="  0px 0px 36px 8px #7928CA" />
        <Link
          href="https://github.com/kanosy88/WooflashToolsV1#how-to-use"
          isExternal
          my={10}
          textAlign={'center'}
          bg={'#97FFDA'}
          bgClip="text"
          textShadow={'0px 0px 36px 8px rgba(82, 255, 0, 0.25)'}
        >
          Comment ça marche?
        </Link>
      </Container>
    </ChakraProvider>
  );
}

export default App;
