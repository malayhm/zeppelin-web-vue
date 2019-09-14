import { EventBus } from '@/services/event-bus'
import notebookUtils from '@/services/notebook-utils'

export default {
  setupCommands (store) {
    this.setupTabCommands(store)

    this.setupNotebookCommands(store)
    this.setupParagraphCommands(store)
  },

  setupTabCommands (store) {
    EventBus.$on('show-tab', tabType => {
      let tabName = tabType
        .replace('-', ' ')
        .replace(/\w+/g, function (w) {
          return w[0].toUpperCase() + w.slice(1).toLowerCase()
        })

      let tab = {
        id: 'zeppelin-system-' + tabName,
        name: tabName,
        type: tabType,
        path: '/zeppelin-system/' + tabName
      }

      store.dispatch('addTab', tab)
    })
  },

  setupNotebookCommands (store) {
    EventBus.$on('notebook', (command) => {
      let isActiveNotebook = (store.state.TabManagerStore.currentTab &&
                              store.state.TabManagerStore.currentTab.type === 'notebook')
      console.log('notebook ' + command)
      if (!isActiveNotebook) {
        return
      }
      let notebook = store.state.TabManagerStore.currentTab
      // let noteId = store.state.TabManagerStore.currentTab.id

      switch (command) {
        case 'new':
          break
        case 'import-json':
          break
        case 'clear-output': // PARAGRAPH_CLEAR_ALL_OUTPUT, notebookId
          break
        case 'run-all':
          break
        case 'run-before':
          break
        case 'run-focused':
          break
        case 'run-after':
          break
        case 'save':
          break
        case 'export-json':
          notebookUtils.exportJSON(notebook)
          break
        case 'print':
          break
        case 'delete-temporary':
          break
        case 'delete-permanently':
          break
        case 'clone':
          break
        case 'reload':
          break
        case 'show-toc':
          break
        case 'show-version-control':
          break
        case 'show-notbeook-info':
          break
        case 'find-and-replace':
          break
        case 'manage-permissions':
          break
        case 'toggle-code':
          break
        case 'toggle-output':
          break
        case 'toggle-line-numbers':
          break
      }
    })
  },

  setupParagraphCommands (store) {
    EventBus.$on('paragraph', (command) => {
      let isActiveNotebook = (store.state.TabManagerStore.currentTab &&
                              store.state.TabManagerStore.currentTab.type === 'notebook')

      if (!isActiveNotebook) {
        return
      }
      // let noteId = store.state.TabManagerStore.currentTab.id
      // let activeParagraph ==
      // let paragraphId = ??

      switch (command) {
        case 'run':
          break
        case 'clone':
          break
        case 'delete':
          break
        case 'toggle-code':
          break
        case 'toggle-output':
          break
        case 'toggle-line-numbers':
          break
      }
    })
  }
}