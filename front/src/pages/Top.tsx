import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';

import { Box, Button, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

export const Top: FC = memo(() => {
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
    } else {
      setAddress("");
    }
  };

  return (
    <Box display="flex" justifyContent={"center"} padding={{ base: 3, md: 5 }}>
      <Stack spacing={8}>
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          color={"gray.600"}
          display="flex"
          justifyContent={"center"}
        >
          AIマルシェへようこそ！
        </Heading>
        <Box display="flex" justifyContent={"center"}>
          {!address ? (
            <>
              <Stack spacing={4}>
                <Text>
                  AIマルシェを利用するにはWalletに接続する必要があります
                </Text>
                <Button onClick={connectWallet}>Walletに接続する</Button>
              </Stack>
            </>
          ) : (
            <>
              <Stack spacing={4}>
                <Text>AIマルシェでは以下のサービスを提供しています</Text>
                <UnorderedList>
                  <ListItem>
                    ブロックチェーン上の公開AIモデルで推論をおこなう（無料）
                  </ListItem>
                  <ListItem>
                    ブロックチェーン上の公開AIモデルに学習データを提供してインセンティブを得る
                  </ListItem>
                  <ListItem>
                    デポジットを払い、より複雑なAIモデルで推論をおこなう
                  </ListItem>
                </UnorderedList>
                <Text mt={8} display="flex" justifyContent={"center"}>
                  利用したいサービスを選択してください
                </Text>
                <Stack>
                  <Button
                    onClick={() => {
                      navigate("simple-predict");
                    }}
                  >
                    ブロックチェーン上のモデルで推論をおこなう！
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("simple-learn");
                    }}
                  >
                    ブロックチェーン上のモデルに学習データを提供する！
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("complex-predict");
                    }}
                  >
                    複雑なAIモデルで推論をおこなう！
                  </Button>
                </Stack>
              </Stack>
            </>
          )}
        </Box>
      </Stack>
    </Box>
  );
});
