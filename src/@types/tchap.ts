export enum TchapRoomType {
  Direct = "direct",
  Private = "private",
  External = "external",
  Forum = "forum",
}

export enum TchapRoomAccessRule {
  Unrestricted = "unrestricted", // accessible to externals
  Restricted = "restricted" // not accessible to externals
}

export interface IAccessRuleEventContent {
  rule: TchapRoomAccessRule; // eslint-disable-line camelcase
}
