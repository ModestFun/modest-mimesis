import { navList } from './../../config/menu.config';
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import useNavMenu from './useNavMenu';

interface navLink {
  name: string;
  class: string;
  path: string;
  component: () => {};
  title: string;
}

function useNavSelected(initSelected: string): void {
  const navLinkClick = (pathname: string): void => {
    if (navList.find(i => i.path === pathname)) {
      const navList: navLink[] = useNavMenu()
      navList.forEach(
        (i) =>
        (i.class =
          i.path === pathname ? "navLink navLink_selected" : "navLink")
      );
    }
  };
  onBeforeMount(() => {
    navLinkClick(initSelected)
  })
  onMounted(() => {
    document.getElementById("nav")!.addEventListener('click', (e): void => {
      navLinkClick('/' + (e.target + "").split(' ')[0].split('/')[3])
    })
  });
  onUnmounted(() => {
    document.getElementById("nav")!.removeEventListener('click', (): void => { })
  });

}

export default useNavSelected
