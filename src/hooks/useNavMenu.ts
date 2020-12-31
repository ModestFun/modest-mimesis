import { reactive } from 'vue'
import { navList } from '../../config/menu.config';

interface navLink {
  name: string;
  class: string;
  path: string;
  component: () => {};
  title: string;
}

function useNavMenu(): navLink[] {
  return reactive([...navList])
}

export default useNavMenu
