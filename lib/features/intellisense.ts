import type * as vscode from "vscode";
import {
  ExtensionHostKind,
  registerExtension,
} from "@codingame/monaco-vscode-api/extensions";

const { getApi } = registerExtension(
  {
    name: "fake-intellisense",
    publisher: "codingame",
    version: "1.0.0",
    engines: {
      vscode: "*",
    },
  },
  ExtensionHostKind.LocalProcess
);

void getApi().then(async (api) => {
  api.languages.registerCallHierarchyProvider("javascript", {
    prepareCallHierarchy: function (): vscode.ProviderResult<
      vscode.CallHierarchyItem | vscode.CallHierarchyItem[]
    > {
      return {
        name: "Fake call hierarchy",
        kind: api.SymbolKind.Class,
        uri: api.Uri.file("/workspace/test.js"),
        range: new api.Range(0, 0, 0, 10),
        selectionRange: new api.Range(0, 0, 0, 10),
      };
    },
    provideCallHierarchyIncomingCalls: function (): vscode.ProviderResult<
      vscode.CallHierarchyIncomingCall[]
    > {
      return [
        {
          from: {
            name: "Fake incomming call",
            kind: api.SymbolKind.Class,
            uri: api.Uri.file("/workspace/test.js"),
            range: new api.Range(0, 0, 0, 10),
            selectionRange: new api.Range(0, 0, 0, 10),
          },
          fromRanges: [new api.Range(2, 0, 2, 10)],
        },
      ];
    },
    provideCallHierarchyOutgoingCalls: function (): vscode.ProviderResult<
      vscode.CallHierarchyOutgoingCall[]
    > {
      return [];
    },
  });
});
