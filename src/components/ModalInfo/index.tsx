import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { IBanner } from "@/data/interfaces/banner";
import { ICharacter } from "@/data/interfaces/characters";
import { IComics } from "@/data/interfaces/comics";

type dataType = IComics & ICharacter & IBanner;

interface ModalInfoProps {
  isOpen: boolean;
  onClose?: () => void;
  overlay: boolean;
  data: dataType;
}

export const ModalInfo = ({
  isOpen,
  onClose,
  data,
  overlay,
}: ModalInfoProps) => {
  return (
    <>
      <Modal
        isCentered
        size={["full", "lg"]}
        isOpen={isOpen}
        onClose={onClose as () => void}
      >
        {overlay && (
          <ModalOverlay
            filter="grayscale(100%)"
            backgroundSize="cover"
            bg="blackAlpha.300"
            backdropFilter="blur(2px) hue-rotate(90deg)"
          />
        )}
        <ModalOverlay />
        <ModalContent
          maxH="80%"
          overflow={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <ModalCloseButton />
          <ModalHeader>{data?.title || data?.name}</ModalHeader>
          <ModalBody>
            <Text>
              {data?.description ||
                "To access more content related to this, access the related links."}
            </Text>
          </ModalBody>
          <ModalFooter
            flexDir="column"
            gap="16px"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {data?.urls?.map((url) => (
              <VStack key={url?.type}>
                <Flex gap="8px">
                  <Text textTransform="capitalize">{url?.type}:</Text>
                  <Link color="blue" as={RouterLink} to={url?.url} isExternal>
                    click here
                  </Link>
                </Flex>
              </VStack>
            ))}
            <Flex w="100%" justifyContent="flex-end">
              <Button>Delivery me</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
