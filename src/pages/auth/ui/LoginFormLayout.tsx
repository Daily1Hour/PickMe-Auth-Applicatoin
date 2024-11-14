import React from "react";

import { Stack, Heading, Button, Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { PasswordInput } from "@/shared/chakra-ui/password-input";

export default function LoginFormLayout(): React.ReactElement {
    return (
        <Stack>
            <Heading as="h2">로그인</Heading>
            <form>
                <Stack gap="4" align="flex-start" maxW="sm">
                    <Field label="아이디" required>
                        <Input />
                    </Field>

                    <Field label="비밀번호" required>
                        <PasswordInput />
                    </Field>
                </Stack>

                <Button
                    type="submit"
                    colorPalette="blue"
                    mt={5}
                    bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                >
                    제출
                </Button>
            </form>
        </Stack>
    );
}
