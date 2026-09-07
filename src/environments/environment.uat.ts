import { KeystoneEnvironment } from './environment.model';

export const environment: KeystoneEnvironment = {
  production: true,
  name: 'uat',
  issuer: 'https://login-uat.northgatetrust.example/keystone',
  clientId: 'keystone-web',
  redirectUri: 'https://login-uat.northgatetrust.example/callback',
  postLogoutRedirectUri: 'https://login-uat.northgatetrust.example/',
  bffBaseUrl: 'https://api-uat.northgatetrust.example/retail',
  requireHttps: true,
  telemetryEnabled: true,
  deviceTrustDays: 30,
  pushPollIntervalMs: 2000,
  pushTimeoutMs: 90000,
  maintenanceWindow: null,
};
