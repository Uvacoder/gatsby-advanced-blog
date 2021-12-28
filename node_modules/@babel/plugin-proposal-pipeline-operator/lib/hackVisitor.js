"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@babel/core");

const topicReferenceReplacementVisitor = {
  TopicReference(path) {
    path.replaceWith(_core.types.cloneNode(this.topicVariable));
  }

};
var _default = {
  BinaryExpression: {
    exit(path) {
      const {
        scope,
        node
      } = path;

      if (node.operator !== "|>") {
        return;
      }

      const topicVariable = scope.generateUidIdentifierBasedOnNode(node);
      const pipeBodyPath = path.get("right");
      scope.push({
        id: topicVariable
      });

      if (pipeBodyPath.node.type === "TopicReference") {
        pipeBodyPath.replaceWith(_core.types.cloneNode(topicVariable));
      } else {
        pipeBodyPath.traverse(topicReferenceReplacementVisitor, {
          topicVariable
        });
      }

      path.replaceWith(_core.types.sequenceExpression([_core.types.assignmentExpression("=", _core.types.cloneNode(topicVariable), node.left), node.right]));
    }

  }
};
exports.default = _default;