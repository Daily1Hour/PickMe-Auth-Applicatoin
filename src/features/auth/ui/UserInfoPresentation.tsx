import React from "react";

import { Button, Stack, Text } from "@chakra-ui/react";
import { ProgressCircleRing, ProgressCircleRoot } from "@/shared/chakra-ui/progress-circle";

import useUserInfo from "../lib/useUserInfo";
import getLoggedIn from "../lib/getLoggedIn";

export default function UserInfoPResentation(): React.ReactElement {
    const { "cognito:username": username, email } = useUserInfo();
    const { isLoggedIn, onLogout } = getLoggedIn();

    return (
        <>
            {isLoggedIn ? (
                <Stack w="100%">
                    <Button onClick={onLogout}>로그아웃</Button>
                    <Text>아이디: {username}</Text>
                    <Text>이메일: {email}</Text>
                </Stack>
            ) : (
                <ProgressCircleRoot value={null}>
                    <ProgressCircleRing />
                </ProgressCircleRoot>
            )}
        </>
    );
}
