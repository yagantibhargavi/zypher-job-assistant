import {
  AnthropicModelProvider,
  createZypherContext,
  ZypherAgent,
  runAgentInTerminal,
} from "@corespeed/zypher";

// Helper for env variables
function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) {
    throw new Error(`Missing env variable: ${name}`);
  }
  return value;
}

// Create context from the current directory
const context = await createZypherContext(Deno.cwd());

// Create provider with your Anthropic key + model
const provider = new AnthropicModelProvider({
  apiKey: getRequiredEnv("ANTHROPIC_API_KEY"),
  model: "claude-3-haiku-20240307",
});

// Create the agent (no .init() needed)
const agent = new ZypherAgent(context, provider);

console.log("🚀 Zypher Job Assistant Started!");
console.log("Paste a job description, then ask things like:");
console.log("- Summarize this job");
console.log("- Create 3 resume bullet points");
console.log("- What skills are required?");
console.log("- How should I prepare for the interview?\n");

// Start interactive terminal chat
await runAgentInTerminal(agent);
