const config = [
    {
        'replace': '{{core}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "mcp-agent-validator",
                "githubUserName": "agentprobe",
                "githubRepository": "mcp-agent-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "mcp-agent-assessment",
                "githubUserName": "agentprobe",
                "githubRepository": "mcp-agent-assessment",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    },
    {
        'replace': '{{protocols}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "a2a-agent-validator",
                "githubUserName": "agentprobe",
                "githubRepository": "a2a-agent-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "x402-mcp-validator",
                "githubUserName": "agentprobe",
                "githubRepository": "x402-mcp-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "erc8004-registry-parser",
                "githubUserName": "agentprobe",
                "githubRepository": "erc8004-registry-parser",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "mcp-apps-validator",
                "githubUserName": "agentprobe",
                "githubRepository": "mcp-apps-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "ucp-commerce-validator",
                "githubUserName": "agentprobe",
                "githubRepository": "ucp-commerce-validator",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    }
]


export { config }
