import { BoxProps, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

function FormWrapper({children, ...props}:{children:ReactNode} & BoxProps){
         
    return (
        <Box w="100%" maxW="container.sm" boxShadow="xl" p="8" as="form" {...props}>
      {children}
    </Box>
  );
}

export default FormWrapper;