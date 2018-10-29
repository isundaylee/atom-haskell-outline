'use babel';

import type {OutlineProvider} from 'atom-ide-ui';
import type {TokenizedText} from 'nuclide-commons/tokenized-text';

import {Point} from 'atom';

import {method, param, whitespace} from 'nuclide-commons/tokenized-text';

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

function getOutline(editor) {
  var trees = [];
  
  editor.scan(/^(\w+)\s*::/g, function (match) {
    trees.push({
      tokenizedText: [method(match.match[1])],
      startPosition: new Point(match.range.start.row, match.range.start.column),
      children: []
    });
  });
  
  return {
    outlineTrees: trees
  };
}

export function provideOutlineView() : OutlineProvider {
  return {
    name: "haskell-outline",
    priority: 10,
    grammarScopes: ["source.haskell"],
    getOutline: getOutline
  };
}
