import { Agent } from "./classes/Agent";

const test = (state:number[]) => {
  console.log(state)
}
const agent = new Agent(0.9,0.9,0.9)
agent.setupAgent()
agent.run(1,0,1,0,1,test)

