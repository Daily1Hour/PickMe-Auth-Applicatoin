import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Stack, Heading, Button, Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { PasswordInput } from "@/shared/chakra-ui/password-input";

import LoginCredential from "@/entities/LoginCredential";

interface LoginFormLayoutProps extends UseFormReturn<LoginCredential> {
    onSubmit: (data: LoginCredential) => void;
}

export default function LoginPresentation({
    register,
    handleSubmit,
    formState: { errors, isValid },
    onSubmit,
}: LoginFormLayoutProps): React.ReactElement {
    return (
        <Stack>
            <Heading as="h2">로그인</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="4" align="flex-start" maxW="sm">
                    <Field
                        label="아이디"
                        invalid={!!errors.username}
                        errorText={errors.username?.message}
                        required
                    >
                        <Input
                            {...register("username", {
                                required: "아이디를 입력해주세요",
                            })}
                        />
                    </Field>

                    <Field
                        label="비밀번호"
                        invalid={!!errors.password}
                        errorText={errors.password?.message}
                        required
                    >
                        <PasswordInput
                            {...register("password", {
                                required: "비밀번호를 입력해주세요",
                            })}
                        />
                    </Field>
                </Stack>

                <Button
                    type="submit"
                    colorPalette="blue"
                    mt={5}
                    bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                    disabled={!isValid}
                >
                    제출
                </Button>
            </form>
        </Stack>
    );
}
