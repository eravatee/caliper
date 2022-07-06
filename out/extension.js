"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const util_1 = require("./util");
const UserSettings_1 = require("./UserSettings");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const updateUserSettings = async (settings) => {
    settings.forEach(async (setting) => {
        const { key, value } = (0, util_1.extractAsKeyValue)(setting);
        await vscode.workspace
            .getConfiguration()
            .update(key, value, vscode.ConfigurationTarget.Global);
    });
};
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "hyperledger-caliper-tool" is now active!');
    updateUserSettings(UserSettings_1.userSettings);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('hyperledger-caliper-tool.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from hyperledger-caliper-tool!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map