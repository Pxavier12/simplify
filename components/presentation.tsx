"use client";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function presentation() {



  return (
    <>
      <h1
        className="titleSoin pr-10 pl-10 pb-5 mb-6 text-center font-bold "
        pr={10}
        pl={10}
        pb={5}
        mb={6}
        textAlign="center"
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color={useColorModeValue("gray.900", "gray.100")}
      >
        Aux petits soins pour vous servir
      </h1>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3 }}
        spacing={20}
        pr={{ base: 10, md: 30, lg: 100 }}
        pl={{ base: 10, md: 30, lg: 100 }}
        pb={20}
        placeItems={"center"}
        className="bodySoin"
      >
        <Box
          mx="auto"
          rounded="lg"
          bg={useColorModeValue("white", "gray.600")}
          color={useColorModeValue("white", "gray.600")}
          maxW="2xl"
        >
          <Image
            width={"6000"}
            height={"4000"}
            className="rounded-full shadow-sm"
            objectFit="cover"
            layout="responsive"
            src={"/images/suitcase.jpg"}
            alt="Suitcase"
          />

          <Box p={6}>
            <Box>
              <Text
                display="block"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="2xl"
                textAlign="center"
                mt={2}
                _hover={{ color: "gray.600" }}
              >
                Notre team voyageur dispo 24/7
              </Text>
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
                justifySelf="center"
                textAlign="center"
              >
                Le séjour des voyageurs doit être une expérience inoubliable.
                Notre assistance voyageur intervient 24/7 pour que cela ne soit
                pas qu’une promesse !
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          mx="auto"
          rounded="lg"
          bg={useColorModeValue("white", "gray.600")}
          color={useColorModeValue("white", "gray.600")}
          maxW="2xl"
        >
          <Image
            width={"3024"}
            height={"2000"}
            objectFit="cover"
            layout="responsive"
            className="rounded-full shadow-sm"
            shadow={"lg"}
            src={"/images/call.jpg"}
            alt="Call"
          />

          <Box p={6}>
            <Box>
              <Text
                display="block"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600" }}
                align="center"
                textAlign="center"
              >
                Rien que pour vous
              </Text>
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
                justifySelf="center"
                textAlign="center"
              >
                Quand votre logement est géré par nos soins, vous avez un
                contact privilégié avec un de nos « customer success » pour
                répondre à toutes vos sollicitations.{" "}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.600")}
          color={useColorModeValue("white", "gray.600")}
          maxW="2xl"
        >
          <Image
            width={"6000"}
            height={"4000"}
            className="rounded-full shadow-sm"
            objectFit="cover"
            layout="responsive"
            src={"/images/housework.jpg"}
            alt="Housework"
          />

          <Box p={6}>
            <Box>
              <Text
                display="block"
                textAlign="center"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600" }}
              >
                Des pros du ménage toujours là
              </Text>
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
                justifySelf="center"
                textAlign="center"
              >
                A l’arrivée et au départ de chaque voyageur, nos pros de
                l’entretien font le ménage et s’assurent que tout est en ordre
                et qu’il ne manque rien dans votre logement.
              </Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  )
}
