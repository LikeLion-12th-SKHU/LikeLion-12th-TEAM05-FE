/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/{curationId}/like": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["likeSave"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sign-up": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["userSignUp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/location/{curationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["locationSave"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/curation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["curationFindAll"];
        put?: never;
        post: operations["curationSave"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/location/{locationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["locationDelete"];
        options?: never;
        head?: never;
        patch: operations["locationUpdate"];
        trace?: never;
    };
    "/curation/{curationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["curationDelete"];
        options?: never;
        head?: never;
        patch: operations["curationUpdate"];
        trace?: never;
    };
    "/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Test"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sign-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["userSignIn"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["profile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["locationFindAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/curation/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["searchCurations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/code/google": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["googleCallback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/{curationId}/unlike": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["likeDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ApiResponseTemplateSuccessCode: {
            status?: string;
            message?: string;
            /** @enum {string} */
            data?: "GET_SUCCESS" | "LOCATION_UPDATE_SUCCESS" | "CURATION_UPDATE_SUCCESS" | "LOCATION_DELETE_SUCCESS" | "CURATION_DELETE_SUCCESS" | "LIKE_DELETE_SUCCESS" | "USER_SIGNUP_SUCCESS" | "USER_LOGIN_SUCCESS" | "LOCATION_SAVE_SUCCESS" | "CURATION_SAVE_SUCCESS" | "LIKE_SAVE_SUCCESS";
        };
        UserSignUpReqDto: {
            name: string;
            email: string;
            password: string;
            /** @enum {string} */
            role?: "USER";
        };
        LocationSaveReqDto: {
            name?: string;
            description?: string;
            address?: string;
        };
        ApiResponseTemplateLocationInfoResDto: {
            status?: string;
            message?: string;
            data?: components["schemas"]["LocationInfoResDto"];
        };
        LocationInfoResDto: {
            /** Format: int64 */
            curationId?: number;
            name?: string;
            description?: string;
            address?: string;
            locationImage?: string;
        };
        CurationSaveReqDto: {
            name?: string;
            content?: string;
        };
        ApiResponseTemplateCurationInfoResDto: {
            status?: string;
            message?: string;
            data?: components["schemas"]["CurationInfoResDto"];
        };
        CurationInfoResDto: {
            /** Format: int64 */
            id?: number;
            name?: string;
            content?: string;
            /** Format: int32 */
            likeCount?: number;
        };
        LocationUpdateReqDto: {
            name?: string;
            description?: string;
            address?: string;
        };
        CurationUpdateReqDto: {
            name?: string;
            content?: string;
        };
        UserSignInReqDto: {
            email: string;
            password: string;
        };
        ApiResponseTemplateUserSignInResDto: {
            status?: string;
            message?: string;
            data?: components["schemas"]["UserSignInResDto"];
        };
        UserSignInResDto: {
            name?: string;
            email?: string;
            token?: string;
        };
        ApiResponseTemplateLocationListResDto: {
            status?: string;
            message?: string;
            data?: components["schemas"]["LocationListResDto"];
        };
        LocationListResDto: {
            locations?: components["schemas"]["LocationInfoResDto"][];
        };
        ApiResponseTemplateCurationListResDto: {
            status?: string;
            message?: string;
            data?: components["schemas"]["CurationListResDto"];
        };
        CurationListResDto: {
            curations?: components["schemas"]["CurationInfoResDto"][];
        };
        GoogleToken: {
            accessToken?: string;
        };
        ApiResponseTemplateString: {
            status?: string;
            message?: string;
            data?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    likeSave: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                curationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateSuccessCode"];
                };
            };
        };
    };
    userSignUp: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserSignUpReqDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateSuccessCode"];
                };
            };
        };
    };
    locationSave: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                curationId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    location: components["schemas"]["LocationSaveReqDto"];
                    /** Format: binary */
                    locationImage: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateLocationInfoResDto"];
                };
            };
        };
    };
    curationFindAll: {
        parameters: {
            query?: {
                page?: number;
                size?: number;
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateCurationListResDto"];
                };
            };
        };
    };
    curationSave: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CurationSaveReqDto"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateCurationInfoResDto"];
                };
            };
        };
    };
    locationDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateString"];
                };
            };
        };
    };
    locationUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    location: components["schemas"]["LocationUpdateReqDto"];
                    /** Format: binary */
                    locationImage: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateLocationInfoResDto"];
                };
            };
        };
    };
    curationDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                curationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateSuccessCode"];
                };
            };
        };
    };
    curationUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                curationId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CurationUpdateReqDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateCurationInfoResDto"];
                };
            };
        };
    };
    Test: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
        };
    };
    userSignIn: {
        parameters: {
            query: {
                userSignInReqDto: components["schemas"]["UserSignInReqDto"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateUserSignInResDto"];
                };
            };
        };
    };
    profile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
        };
    };
    locationFindAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateLocationListResDto"];
                };
            };
        };
    };
    searchCurations: {
        parameters: {
            query: {
                query: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateCurationListResDto"];
                };
            };
        };
    };
    googleCallback: {
        parameters: {
            query: {
                code: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["GoogleToken"];
                };
            };
        };
    };
    likeDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                curationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseTemplateSuccessCode"];
                };
            };
        };
    };
}
