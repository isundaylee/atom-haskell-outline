'use babel';

import type {OutlineProvider} from 'atom-ide-ui';

export default {

  activate(state) {
  },

  deactivate() {
  },

  serialize() {
  },

  toggle() {
  }

};

export function provideOutlineView() : OutlineProvider {
  return {
    name: "haskell-outline",
    priority: 10,
    grammarScopes: ["source.js"],
    getOutline(editor) {
      return {
        outlineTrees: [{
          plainText: "test",
          startPosition: [1, 1],
          children: []
        }]
      };
    }
  };
}
