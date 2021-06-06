
class SwiftLanguageServer {
    constructor() {
        // Observe the configuration setting for the server's location, and restart the server on change
        nova.config.observe('stellar.swift.language-server-path', function(path) {
            this.start(path);
        }, this);
    }
    
    deactivate() {
        this.stop();
    }
    
    start(path) {
        if (this.languageClient) {
            this.languageClient.stop();
            nova.subscriptions.remove(this.languageClient);
        }
        
        // Use the default server path
        // TODO: figure out the currently selected toolchain
        if (!path) {
            path = '/usr/bin/xcrun';
        }
        
        // Create the client
        var serverOptions = {
            path: path,
            args: [
                "--run",
                "sourcekit-lsp"
            ]
        };
        var clientOptions = {
            // The set of document syntaxes for which the server is valid
            syntaxes: ['swift']
        };
        var client = new LanguageClient('Swift', 'Swift Language Server', serverOptions, clientOptions);
        
        try {
            // Setup our restart handler.
            client.onDidStop(function(error) {
                console.log('sourcekit-lsp stopped. error = \"' + error + '\"');
                // if Nova stops it on purpose, the error will be undefined.
                if (error !== undefined) {
                    this.start(path);
                }
            }, this);
            
            // Start the client
            client.start();
            
            // Add the client to the subscriptions to be cleaned up
            nova.subscriptions.add(client);
            this.languageClient = client;
        }
        catch (err) {
            // If the .start() method throws, it's likely because the path to the language server is invalid
            
            if (nova.inDevMode()) {
                console.error(err);
            }
        }
        
        console.log('sourcekit-lsp started.')
    }
    
    stop() {
        if (this.languageClient) {
            this.languageClient.stop();
            nova.subscriptions.remove(this.languageClient);
            this.languageClient = null;
        }
    }
}

module.exports = SwiftLanguageServer;
