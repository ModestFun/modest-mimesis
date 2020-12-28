import { reactive, ref, Ref, toRefs } from 'vue'
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
function computeColor(moodScore: Ref<number>): string {
  if (moodScore.value === 6) {
    return "#ecf0f3"
  } else if (moodScore.value === 10) {
    return "#db6161"
  }
  return 'none'
}

function setWebTheme(color: string) {
  global.webStyle.find(i => {
    if (i.background === color) {
      document.body.style.setProperty("--background", i.background);
      document.body.style.setProperty("--whiteShadow", i.whiteShadow);
      document.body.style.setProperty("--blackShadow", i.blackShadow);
    }
  })

}

function useWebThemeController(moodScore: number = 6): void {
  setWebTheme(computeColor(ref(moodScore)))
}

export default useWebThemeController
