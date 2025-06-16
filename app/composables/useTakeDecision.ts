export function useTakeDecision() {
  const factor = ref<number | undefined>(undefined)
  const isLoading = ref<boolean>(false)

  enum DECISION_STATES {
    Idle,
    Accepted,
    Rejected,
    AskForValidation
  }

  const decisionState = computed(() => {
    if (!isDefinedRef(factor)) {
      return DECISION_STATES.Idle
    }

    if (factor.value <= 0.5) {
      return DECISION_STATES.Accepted
    }

    if (factor.value <= 0.6) {
      return DECISION_STATES.Rejected
    }

    return DECISION_STATES.AskForValidation
  })

  const isIdle = computed(() => {
    return decisionState.value === DECISION_STATES.Idle
  })


  const resetDecisionState = () => {
    factor.value = undefined
  }

  const takeDecision = async () => {
    if (!isIdle.value) {
      resetDecisionState()
      return
    }

    isLoading.value = true
    await delay(Math.random() * 6 * 1000)
    factor.value = Math.random()
    isLoading.value = false
  }


  const decisionDisplay = computed(() => {
    switch (decisionState.value) {
      case DECISION_STATES.Idle: {
        return 'Quelle est votre question ?'
      }

      case DECISION_STATES.Accepted: {
        return 'Oui'
      }

      case DECISION_STATES.Rejected: {
        return 'Non'
      }

      case DECISION_STATES.AskForValidation: {
        const collegues = ['la Persidente', 'le Vice', 'le Responsable', 'le CTO', 'le SIF']
        return `Validation par ${collegues[Math.floor(Math.random() * collegues.length)]} nécessaire`
      }

      default: {
        const _exhaustiveCheck: never = decisionState.value;
        throw new Error(`Unhandled decisionState: ${_exhaustiveCheck}`)
      }
    }
  })

  return {
    decisionDisplay,
    isLoading,
    takeDecision,
  }
}
