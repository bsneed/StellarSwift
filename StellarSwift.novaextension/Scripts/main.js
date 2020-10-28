const SwiftLanguageServer = require("./lsp");
const SwiftTaskProvider = require("./build");

var langserver = null;

exports.activate = function() {
    // Setup the language server
    langserver = new SwiftLanguageServer();
}

exports.deactivate = function() {
    // Clean up language server
    if (langserver) {
        langserver.deactivate();
        langserver = null;
    }
}

// Register our build tasks
nova.assistants.registerTaskAssistant(new SwiftTaskProvider(), {
    identifier: "stellar.swift.build-tasks",
    name: "Stellar Swift Build"
});

