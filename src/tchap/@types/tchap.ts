export enum TchapRoomType {
    Direct = "direct",
    Private = "private",
    PrivateNonEncrypted = "private_no_encrypt",
    PrivateNonEncryptedExternal = "private_no_encrypt_external",
    External = "external",
    Forum = "forum",
    Unknown = "unknown",
}

export enum TchapRoomAccessRule {
    Unrestricted = "unrestricted", // accessible to externals
    Restricted = "restricted", // not accessible to externals
}

export enum TchapRoomAccessRuleVisibility {
    Private = "private",
    Public = "public",
}

export interface TchapIAccessRuleEventContent {
    rule: TchapRoomAccessRule; // eslint-disable-line camelcase
    encrypted?: boolean | undefined;
    visibility?: TchapRoomAccessRuleVisibility | undefined
}

export const TchapRoomAccessRulesEventId = "im.vector.room.access_rules";
