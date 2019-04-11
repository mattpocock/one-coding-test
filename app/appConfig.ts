/* global __API__ */
export default {
  // @ts-ignore
  serverUrl: __API__, // __API__ is inject by webpack,
  nodeEnv: process.env, // __API__ is inject by webpack,
};
