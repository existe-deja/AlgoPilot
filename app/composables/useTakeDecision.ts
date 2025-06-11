export function useTakeDecision() {
  const test = ref<boolean | undefined>(undefined)

  const takeDecision = () => {
    if (test.value === undefined) {
      test.value = Math.random() < 0.51
      return
    }
    test.value = undefined
  }

  const display = computed(() => {
    switch (test.value) {
      case true:
        return 'Oui'
      case false:
        return 'Non'
      default:
        return 'Posez une question'
    }
  })

  return {
    display,
    takeDecision,
  }
}
