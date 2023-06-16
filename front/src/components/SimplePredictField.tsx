import { ChangeEvent, FC, memo, useState } from 'react';

import { Box, Button, Input, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';

type Props = {
  id: number;
};

export const SimplePredictField: FC<Props> = memo((props) => {
  const { id } = props;

  const [input, setInput] = useState("");
  const [result, setResult] = useState("-");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <>
      <Box mt={8} display="flex" justifyContent={"center"}>
        <Text>予測するテキストを入力してください</Text>
      </Box>
      <Input value={input} onChange={onChangeInput}></Input>
      <Button isActive={input !== ""}>
        ポジティブ・ネガティブを予測する！
      </Button>
      <Stat mt={8} textAlign={"center"}>
        <StatLabel>予測結果</StatLabel>
        <StatNumber>{result}</StatNumber>
      </Stat>
    </>
  );
});
