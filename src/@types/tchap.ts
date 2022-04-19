export enum TchapRoomType {
  Direct = "direct",
  Private = "private",
  External = "external",
  Forum = "forum",
}


export enum TchapRoomAccessRule {
  Unrestricted = "unrestricted", // todo not used in this file, we haven't implemented DMs yet
  Restricted = "restricted"
}