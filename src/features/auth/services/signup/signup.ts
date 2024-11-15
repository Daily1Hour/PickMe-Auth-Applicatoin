import "dotenv/config";
import {
    ICognitoUserAttributeData,
    ISignUpResult,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import SignupCredential from "@/entities/SignupCredential";
import userPool from "../userPool";

export interface Response {
    message: string;
}

export async function signup({ username, password, email }: SignupCredential): Promise<Response> {
    // Required attributes를 추가
    const requiredAttribute: ICognitoUserAttributeData = {
        Name: "email",
        Value: email,
    };
    const attributes = [new CognitoUserAttribute(requiredAttribute)];

    return new Promise((resolve: (value: Response) => void, reject) => {
        // 가입 요청
        userPool.signUp(
            username,
            password,
            attributes,
            attributes,
            (err: Error | undefined, result: ISignUpResult | undefined): void => {
                if (err) {
                    reject({ message: err.message || JSON.stringify(err) });
                } else resolve({ message: "success" });
            },
        );
    });
}
