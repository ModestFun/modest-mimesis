import { ref, Ref } from 'vue'
const global: globalData = require('../../config/config.json')

interface globalData {
  baseUrl: string;
  dataUrl: string;
  webStyle: webStyle[];
}

interface webStyle {
  background: string;
  whiteShadow: string;
  blackShadow: string;
}

function useWebThemeController(moodScore: number): void {
  setWebTheme(computeColor(ref(moodScore)))
}

function computeColor(moodScore: Ref<number>): string {
  switch (moodScore.value) {
    case 1: return "#363030"
    case 6: return "#ecf0f3"
    case 10: return "#db6161"
    default: return '#ecf0f3'
  }
}

function setWebTheme(color: string) {
  const result: webStyle = global.webStyle.find(i => i.background === color) || global.webStyle[0]
  document.body.style.setProperty("--background", result.background);
  document.body.style.setProperty("--whiteShadow", result.whiteShadow);
  document.body.style.setProperty("--blackShadow", result.blackShadow);
}

export default useWebThemeController
