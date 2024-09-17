import { defineWebApplication, ApplicationSetupOptions, Extension } from '@ownclouders/web-pkg'
import { computed } from 'vue'
import { useGettext } from 'vue3-gettext'

export default defineWebApplication({
  setup(args) {
    const { $gettext } = useGettext()

    const appInfo = {
      name: $gettext('Skeleton'),
      id: 'skeleton'
    }

    const extensions = ({ applicationConfig }: ApplicationSetupOptions) => {
      return computed<Extension[]>(() => {
        return []
      })
    }

    return {
      appInfo,
      extensions: extensions(args)
    }
  }
})
