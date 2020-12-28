import { onMounted, onUnmounted } from 'vue'

function useNavSelected(): void {
  const navLinkClick = (e: any): void => {
    if (e.target.name) {
      const navList: any[] = <HTMLElement[]><any>document.getElementsByClassName("navLink");
      navList.forEach(
        (i) =>
        (i.className =
          i.name === e.target.name ? "navLink navLink_selected" : "navLink")
      );
    }
  };
  onMounted(() => {
    document.getElementById("nav")!.addEventListener('click', (e): void => {
      navLinkClick(e)
    })
  });
  onUnmounted(() => {
    document.getElementById("nav")!.removeEventListener('click', (e): void => {
      navLinkClick(e)
    })
  });
}

export default useNavSelected
