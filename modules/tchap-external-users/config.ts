import Joi from 'joi';

export const TCHAP_EXTERNAL_USERS_MODULE_CONFIG_NAMESPACE =
  'fr.gouv.beta.tchap.module.external_users';
export const TCHAP_EXTERNAL_USERS_MODULE_CONFIG_KEY = 'config';

/**
 * Configurations for the guest module.
 */
export interface TchapExternalUsersModuleConfig {
  /**
   * The URL of the homeserver where the guest users should be registered. This
   * must have the `synapse-guest-module` installed.
   * @example `https://synapse.local`
   *
   * @remark If the URL is set to `USE_REGISTER_ENDPOINT`, this activates a legacy
   *         mode that will call the original register endpoint. This is only
   *         supposed to be used with a legacy synapse module implementation.
   */
  user_homeserver_url: string;
}

const tchapExternalUserModuleConfigSchema = Joi.object<TchapExternalUsersModuleConfig, true>({
  user_homeserver_url: Joi.string()
    .uri()
    .required(),
}).unknown();

/**
 * Validates that the config has a valid structure for a {@link TchapExternalUsersModuleConfig}.
 */
export function assertValidExternalUsersModuleConfig(
  config: unknown,
): asserts config is TchapExternalUsersModuleConfig {

  const result = tchapExternalUserModuleConfigSchema.validate(config);

  if (result.error) {
    throw new Error(
      `Errors in the module configuration in "${TCHAP_EXTERNAL_USERS_MODULE_CONFIG_NAMESPACE}".${TCHAP_EXTERNAL_USERS_MODULE_CONFIG_KEY}: ${result.error.message}`,
    );
  }
}
