import { useMenuStore } from '~/store/menuStore'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const menuStore = useMenuStore()

    menuStore.addMenu({ id: 5, name: 'Blog', link: '/blog', children: [
      { id: 1, name: 'About', link: '/blog/about' }
    ]})
  })
})
