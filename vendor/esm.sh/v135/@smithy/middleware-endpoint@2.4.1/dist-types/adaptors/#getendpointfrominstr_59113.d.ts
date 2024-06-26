import { EndpointParameters, EndpointV2, HandlerExecutionContext } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { EndpointResolvedConfig } from "../resolveEndpointConfig.d.ts";
import { EndpointParameterInstructions } from "../types.d.ts";
/**
 * @internal
 */
export type EndpointParameterInstructionsSupplier = Partial<{
    getEndpointParameterInstructions(): EndpointParameterInstructions;
}>;
/**
 * This step in the endpoint resolution process is exposed as a function
 * to allow packages such as signers, lib-upload, etc. to get
 * the V2 Endpoint associated to an instance of some api operation command
 * without needing to send it or resolve its middleware stack.
 *
 * @internal
 * @param commandInput         - the input of the Command in question.
 * @param instructionsSupplier - this is typically a Command constructor. A static function supplying the
 *                               endpoint parameter instructions will exist for commands in services
 *                               having an endpoints ruleset trait.
 * @param clientConfig         - config of the service client.
 * @param context              - optional context.
 */
export declare const getEndpointFromInstructions: <T extends EndpointParameters, CommandInput extends Record<string, unknown>, Config extends Record<string, unknown>>(commandInput: CommandInput, instructionsSupplier: EndpointParameterInstructionsSupplier, clientConfig: Partial<EndpointResolvedConfig<T>> & Config, context?: HandlerExecutionContext) => Promise<EndpointV2>;
/**
 * @internal
 */
export declare const resolveParams: <T extends EndpointParameters, CommandInput extends Record<string, unknown>, Config extends Record<string, unknown>>(commandInput: CommandInput, instructionsSupplier: EndpointParameterInstructionsSupplier, clientConfig: Partial<EndpointResolvedConfig<T>> & Config) => Promise<EndpointParameters>;
