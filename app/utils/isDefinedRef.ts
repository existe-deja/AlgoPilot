import type { Ref } from "vue"

export function isDefinedRef<T>(x: Ref<T | undefined | null>): x is Ref<T> {
  return isDefined(x.value)
}