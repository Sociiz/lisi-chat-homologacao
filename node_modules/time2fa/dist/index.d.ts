type Algorithms = "sha1" | "sha256" | "sha512";

interface TotpConfig {
    secretSize?: number;
    period?: number;
    digits?: number;
    algo?: Algorithms;
}
interface ValidTotpConfig {
    secretSize: number;
    period: number;
    digits: number;
    algo: Algorithms;
}
interface TotpOptions {
    issuer: string;
    user: string;
}
interface UrlOptions {
    issuer: string;
    user: string;
    secret: string;
}
interface TotpCode {
    secret: string;
    drift?: number;
}
interface TotpValidateOptions extends TotpCode {
    passcode: string;
}
interface HotpCode {
    secret: string;
    counter: number;
}
interface HotpValidateOptions extends HotpCode {
    passcode: string;
}

declare class GenerateKey {
    readonly issuer: string;
    readonly user: string;
    readonly secret: string;
    readonly url: string;
    readonly config: ValidTotpConfig;
    constructor(options: TotpOptions, config?: TotpConfig);
}

declare class TimeBased {
    generateKey(options: TotpOptions, config?: TotpConfig): GenerateKey;
    generatePasscodes(options: TotpCode, config: ValidTotpConfig): string[];
    validate(options: TotpValidateOptions, config?: TotpConfig): boolean;
}

declare class HmacBased {
    generatePasscode(options: HotpCode, config: ValidTotpConfig): string;
    validate(options: HotpValidateOptions, config?: TotpConfig): boolean;
}

declare const generateConfig: (config?: TotpConfig) => ValidTotpConfig;
declare const generateSecret: (secretSize?: number) => string;
declare const generateBackupCodes: (numCodes?: number, codeLength?: number) => string[];
declare const generateUrl: (options: UrlOptions, config: ValidTotpConfig) => string;
declare const Totp: TimeBased;
declare const Hotp: HmacBased;

export { Hotp, HotpCode, HotpValidateOptions, Totp, TotpCode, TotpConfig, TotpOptions, TotpValidateOptions, UrlOptions, ValidTotpConfig, generateBackupCodes, generateConfig, generateSecret, generateUrl };
