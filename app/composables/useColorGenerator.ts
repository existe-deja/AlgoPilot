export function useColorGenerator() {
  const backgroundColor = ref('#3498db')

  const generateNewColor = () => {
    const hexaUnit = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexaUnit[Math.floor(Math.random() * 16)]
    }
    backgroundColor.value = color
  }

  return {
    backgroundColor,
    generateNewColor,
  }
}
