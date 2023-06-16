import axios from 'axios';
import { FC, memo, useEffect, useState } from 'react';

import { Box, Heading, Select, Stack, Text } from '@chakra-ui/react';

import { SimplePredictField } from '../components/SimplePredictField';

type Model = {
  id: number;
  name: string;
  address: string;
  description: string;
  modelType: string;
  encoder: string;
  accuracy: number;
};

export const SimplePredict: FC = memo(() => {
  const [modelList, setModelList] = useState<Model[]>([]);
  const [model, setModel] = useState<Model>();

  const selectModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(modelList.find((m) => m["id"] === Number(e.target.value)));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/api/models`)
      .then((response) => {
        setModelList([...modelList, ...response.data.models]);
        setModel(modelList[0]);
        console.log(response.data.models);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box display="flex" justifyContent={"center"} padding={{ base: 3, md: 5 }}>
      <Stack spacing={4}>
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          color={"gray.600"}
          display="flex"
          justifyContent={"center"}
        >
          モデルの推論
        </Heading>
        <Box display="flex" justifyContent={"center"}>
          <Text>モデルを選択してください</Text>
        </Box>
        <Select onChange={selectModel}>
          <option key={0} value={0}></option>
          {modelList.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        {model && <SimplePredictField id={model.id} />}
      </Stack>
    </Box>
  );
});
