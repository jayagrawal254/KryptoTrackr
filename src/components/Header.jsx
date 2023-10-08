import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Route } from "react-router-dom";

const Header = () => {
    return (
        <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} justifyContent={"space-between"}>
            <Text
                fontFamily={'heading'}
                color={'white'}
                textAlign={["center", "left"]}
                fontWeight={"bold"}
                fontSize={"2xl"}
                letterSpacing={"widest"}

            >
                {/*<Route path="/" exact>*/}
                    Crypto Tracker
                {/*</Route>*/}
            </Text>
            <HStack>
                <Button variant={"unstyled"} color={"white"} paddingX={"10px"}>
                    <Link to="/">Home</Link>
                </Button>
                <Button variant={"unstyled"} color={"white"} paddingX={"10px"}>
                    <Link to="/exchanges">Exchanges</Link>
                </Button>
                <Button variant={"unstyled"} color={"white"} paddingX={"10px"}>
                    <Link to="/coins">Coins</Link>
                </Button>
            </HStack>
        </HStack>
    );
};

export default Header;
