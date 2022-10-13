export enum TchapRoomType {
  Direct = "direct",
  Private = "private",
  External = "external",
  Forum = "forum",
  Unknown = "unknown",
}

export enum TchapRoomAccessRule {
  Unrestricted = "unrestricted", // accessible to externals
  Restricted = "restricted" // not accessible to externals
}

export interface TchapIAccessRuleEventContent {
  rule: TchapRoomAccessRule; // eslint-disable-line camelcase
}

export const TchapRoomAccessRulesEventId = "im.vector.room.access_rules";
