import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Heading,
  InputGroup,
  InputRightElement,
  Link,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

// A simple type for our form
type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  // For password visibility
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form submitted with:", data);
  };

  return (
    <Flex
      minHeight="100vh"
      backgroundColor="gray.300"
      alignItems="center"
      justifyContent="center"
      padding="20px"
    >
      <Box
        width="1240px"
        height="822px"
        borderRadius="36px"
        boxShadow="md"
        backgroundColor="#EBF0EE"
        overflow="hidden"
      >
        <Flex direction={{ base: "column", md: "row" }}>
          {/* Left side - Image */}
          <Box
           
            width="707px"
            height="758px"
            backgroundColor="#D6E1DC"
            borderRadius="36px"
            padding="100px"
            margin="30px"
            textAlign="center"
            alignItems="center"
          >
            <Image
              src="src/images/WavyFood.png"
              
            />
            <Text 
                color="#346751"
                textAlign="center"
                margin="40px"
                fontSize="14px"
            
            >
                FoodeVerse
            </Text>
          </Box>

          {/* Right side - Login Form */}
          <Box
            padding="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="758px"
            marginLeft="10px"
          >
            <Box width="100%">
              <Heading as="h1" textAlign="left" marginBottom="30px" color="#152920">
                Login
              </Heading>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl marginBottom="20px">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="foodverse@gmail.com"
                    border="1px"
                    width="381px"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid Email Format",
                      },
                    })}
                  />
                  {errors.email && (
                    <Text color="#FF0000" fontSize="sm" marginTop="5px">
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>

                {/* Password field */}
                <FormControl marginBottom="20px">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      border="1px"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password must contain at least one uppercase letter, one number, and one special character",
                        },
                      })}
                    />
                    <InputRightElement>
                      <Button size="sm" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <Text color="#FF0000" fontSize="sm" marginTop="5px">
                      {errors.password.message}
                    </Text>
                  )}
                </FormControl>

                {/* Forgot password */}
                <Link
                  color="#454545"
                  fontSize="sm"
                  display="block"
                  textAlign="left"
                  marginBottom="30px"
                >
                  Forgot your password?
                </Link>

                {/* Login button */}
                <Button
                  type="submit"
                  backgroundColor="#346751"
                  width="100%"
                  size="lg"
                  fontSize="20px"
                  color="#FFFFFF"
                  borderRadius="14px"
                >
                  Login
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LoginPage;
