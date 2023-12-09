/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "SET YOUR COOKIE HERE",
    "CookieArray": [
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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"
    ],
    "Cookiecounter": 1,
    "CookieIndex": 0,
    "ProxyPassword": "",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "localtunnel": false,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "https://claude.ai",
    "api_rProxy": "",
    "padtxt_placeholder": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": false,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 15000,
        "xmlPlot": true,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */