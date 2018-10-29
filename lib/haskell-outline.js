'use babel';

import HaskellOutlineView from './haskell-outline-view';
import { CompositeDisposable } from 'atom';

export default {

  haskellOutlineView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.haskellOutlineView = new HaskellOutlineView(state.haskellOutlineViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.haskellOutlineView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'haskell-outline:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.haskellOutlineView.destroy();
  },

  serialize() {
    return {
      haskellOutlineViewState: this.haskellOutlineView.serialize()
    };
  },

  toggle() {
    console.log('HaskellOutline was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
