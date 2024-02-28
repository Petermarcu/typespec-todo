/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The user is invalid (e.g. forgot to enter email address)
 */
export type InvalidUserResponseJson = ApiErrorJson & {
  statusCode: 422;
  code: "invalid-user";
};

export interface ApiErrorJson {
  /**
   * A machine readable error code
   */
  code: string;
  /**
   * A human readable message
   */
  message: string;
}
