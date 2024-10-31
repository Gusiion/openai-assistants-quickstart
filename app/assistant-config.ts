export let assistantId = "asst_I8FBvZljqpql31sj1mKoTQ3e"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
