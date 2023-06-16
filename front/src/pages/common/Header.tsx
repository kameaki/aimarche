import { FC, memo } from "react";

import { Flex, Heading } from "@chakra-ui/react";

export const Header: FC = memo(() => {
  return (
    <>
      <Flex
        as={"nav"}
        w={"100vw"}
        bg={"orange.300"}
        color={"White"}
        align={"center"}
        justify={"space-between"}
        padding={{ base: 3, md: 5 }}
      >
        <Heading as={"h1"} fontSize={{ base: "md", md: "lg" }}>
          AIマルシェ
        </Heading>
      </Flex>
    </>
  );
});
