const gui = require('gui')

const AccountsPanel = require('./accounts-panel')
const ChannelsPanel = require('./channels-panel')
const ChatBox = require('./chat-box')

class MainWindow {
  constructor() {
    this.window = gui.Window.create({})
    this.contentView = gui.Container.create()
    this.contentView.setStyle({
      flexDirection: 'row',
    })
    this.window.setContentView(this.contentView)
    this.accountsPanel = new AccountsPanel(this)
    this.contentView.addChildView(this.accountsPanel.view)
    this.channelsPanel = new ChannelsPanel()
    this.contentView.addChildView(this.channelsPanel.view)
    this.chatBox = new ChatBox()
    this.contentView.addChildView(this.chatBox.view)
  }
}

module.exports = MainWindow