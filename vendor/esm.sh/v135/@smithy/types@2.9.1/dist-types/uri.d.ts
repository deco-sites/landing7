import { QueryParameterBag } from "./http.d.ts";
/**
 * @internal
 *
 * Represents the components parts of a Uniform Resource Identifier used to
 * construct the target location of a Request.
 */
export type URI = {
    protocol: string;
    hostname: string;
    port?: number;
    path: string;
    query?: QueryParameterBag;
    username?: string;
    password?: string;
    fragment?: string;
};
