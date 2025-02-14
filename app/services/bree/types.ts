export const breeMessagetypes = [
  'steam_limit_exceeded',
  'failed_igniting_app',
  'failed_accessing_database',
  'steam_unexpected_reject',
  'steam_unexpected_error',
] as const
export type BreeMessageType = (typeof breeMessagetypes)[number]

export type BreeMessage = {
  type: BreeMessageType
  data?: Record<string, string | number | boolean>
  issue?: any
}
