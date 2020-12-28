import { ref, Ref, watch } from 'vue'

function useCurrentPathname(): Ref<string> {
  
  return ref(window.location.pathname)
}

export default useCurrentPathname
