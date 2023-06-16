import { FC, memo } from 'react';

import { Box } from '@chakra-ui/react';

export const SimpleLearn: FC = memo(() => {
  return (
    <Box display="flex" justifyContent={"center"} padding={{ base: 3, md: 5 }}>
      <div>simple learn</div>
    </Box>
  );
});
