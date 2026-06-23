// Pobot Alpha - Product Experience Definition and Systems Assistant
// Minimal version focused on four core behaviours:
// 1. Clarify product definition
// 2. Identify assumptions
// 3. Surface constraints
// 4. Compare intent vs behaviour

const pobotResponses = {
  // Entry and guidance
  greeting: {
    keywords: ['hello', 'hi', 'hey', 'start', 'help', 'what can you do'],
    response: `I'm Pobot, a Product Experience Definition and Systems thinking partner.

I help you:
• Clarify what your product actually is
• Identify hidden assumptions
• Surface constraints shaping behaviour
• See gaps between what you intend and what actually happens

Try asking me about:
- "What is this product?" 
- "What assumptions are we making?"
- "What constraints are limiting us?"
- "Why does this behave differently than intended?"

Let's start by understanding your product system.`
  },

  // Pattern 1: Clarify product definition
  definition: {
    keywords: ['what is', 'define', 'product definition', 'what does it do', 'what is this'],
    response: `Let's clarify the product definition. To think clearly about this, I need to understand:

1. **Human intent**: What does the user want to accomplish?
2. **Product behaviour**: What does the product actually do?
3. **Success**: How do you know it worked?
4. **Constraints**: What limits what you can do?

Instead of guessing, tell me:
- Who is using this product and what are they trying to do?
- What specifically does it do for them?
- What constraints matter (technical, business, manufacturing, timeline)?

Once we understand these, we can see what's actually defined and what's still unclear.`
  },

  // Pattern 2: Identify assumptions
  assumptions: {
    keywords: ['assumption', 'assume', 'think', 'expect', 'suppose', 'probably', 'likely'],
    response: `Good — you've spotted an assumption. Let's make it visible.

What you just said suggests you're assuming something about:
- How users will behave
- What context they're in
- What the system can do
- What the organisation can deliver
- What matters to success

Before you commit to a design or build something, ask:
- **What exactly am I assuming?** (Be specific)
- **What would prove this wrong?** (What evidence would change my mind?)
- **What happens if it's false?** (What breaks?)
- **Can I test it cheaply?** (Before investing heavily)

What specific assumption are you most uncertain about?`
  },

  // Pattern 3: Surface constraints
  constraints: {
    keywords: ['constraint', 'limit', 'can\'t', 'impossible', 'won\'t', 'blocked', 'prevented', 'restricted'],
    response: `Constraints are crucial — they shape everything about how a product actually works.

When you say something is constrained, that's not a problem to solve later. That's a signal about what the system values.

Let me understand this constraint better:
- **What exactly is limited?** (latency, capability, cost, time, physical space?)
- **Why does it exist?** (technical, business, manufacturing, safety?)
- **Is it visible to users?** (Do they see it as a feature or a bug?)
- **What would change if you relaxed it?** (What gets harder elsewhere?)

Hidden constraints feel like bugs to users. Visible constraints often become features.

What constraint are you working within?`
  },

  // Pattern 4: Compare intent vs behaviour
  intentVsBehaviour: {
    keywords: ['should', 'supposed to', 'intend', 'expect', 'meant to', 'but actually', 'but it', 'doesn\'t work', 'not working'],
    response: `This is important — you're seeing a gap between what was intended and what actually happens.

These gaps are where systems break. Let's make it clear:

**What was intended:**
- What did you design it to do?
- What did you hope users would experience?
- What was the business goal?

**What actually happens:**
- What do users actually do with it?
- What behaviour do you observe?
- What experience do they report?

**The gap:**
- Where do they diverge?
- Why do you think they differ?
- What evidence do you have about actual behaviour?

When intent and behaviour diverge, behaviour wins. Users experience what actually happens, not what you intended.

What specifically is behaving differently than intended?`
  },

  // Pattern 5: Deepen definition questions
  deepenDefinition: {
    keywords: ['but', 'however', 'also', 'and', 'what if', 'because', 'so'],
    response: `Keep going — you're thinking through the layers.

To understand a product experience system, we need to see how all dimensions connect:
- **Human**: What does the user actually need and expect?
- **Context**: Where, when, and how are they using this?
- **Interaction**: What does the user actually do?
- **Feedback**: What does the product communicate back?
- **Behaviour**: What does the product actually do?
- **Technical**: What systems enable or constrain it?
- **Organisational**: What decisions shape it?
- **Business**: What goals drive it?

When these align, the system is coherent. When they clash, users hit friction.

What's the next thing you're realising about how these fit together?`
  },

  // Pattern 6: Push on evidence
  evidence: {
    keywords: ['think', 'believe', 'probably', 'guess', 'assume', 'maybe', 'might', 'could', 'seem'],
    response: `You're identifying something based on belief rather than evidence.

Before committing significant effort, it's worth asking:
- **What do you actually know?** (Measured, observed, tested)
- **What are you guessing?** (Based on intuition or theory)
- **What's the gap?** (Where could you be wrong?)

Evidence reveals reality. Assumptions reveal intentions.

Could you:
- Describe what you've actually observed (not what you think should happen)
- Identify what you'd need to see to know if you're right
- Estimate the cost of being wrong

What evidence would change your thinking on this?`
  },

  // Default: Redirect to core patterns
  default: {
    response: `I'm here to help you think clearly about product systems.

That's outside my focus right now. Let me ask instead:

Are you trying to:
- **Clarify what the product is** and what it's for?
- **Identify assumptions** you're making that might be untested?
- **Surface constraints** that are shaping your decisions?
- **Compare what you intend** versus what's actually happening?

Pick one and tell me what you're working through.`
  }
};

// Helper function to find best matching response
function findPobotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase().trim();

  // Check for specific patterns in order of priority
  
  // Pattern 1: Intent vs Behaviour (highest priority - most important)
  if (posebotResponses.intentVsBehaviour.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.intentVsBehaviour.response;
  }

  // Pattern 2: Assumptions
  if (posebotResponses.assumptions.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.assumptions.response;
  }

  // Pattern 3: Constraints
  if (posebotResponses.constraints.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.constraints.response;
  }

  // Pattern 4: Definition
  if (posebotResponses.definition.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.definition.response;
  }

  // Pattern 5: Deepening
  if (posebotResponses.deepenDefinition.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.deepenDefinition.response;
  }

  // Pattern 6: Evidence
  if (posebotResponses.evidence.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.evidence.response;
  }

  // Greeting
  if (posebotResponses.greeting.keywords.some(keyword => lowerMessage.includes(keyword))) {
    return posebotResponses.greeting.response;
  }

  // Default
  return posebotResponses.default.response;
}

// Function to add a message to the chat
function addMessage(message, sender) {
  const chatWindow = document.getElementById('chatWindow');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = message;
  
  messageDiv.appendChild(messageParagraph);
  chatWindow.appendChild(messageDiv);
  
  // Scroll to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to send a message
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();

  if (message === '') return;

  // Add user message to chat
  addMessage(message, 'user');

  // Clear input field
  userInput.value = '';

  // Get Pobot response
  const pobotResponse = findPobotResponse(message);

  // Simulate a small delay for natural conversation flow
  setTimeout(() => {
    addMessage(pobotResponse, 'bot');
  }, 500);
}

// Event listeners
document.getElementById('sendBtn').addEventListener('click', sendMessage);

document.getElementById('userInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Focus on input field when page loads
document.getElementById('userInput').focus();
