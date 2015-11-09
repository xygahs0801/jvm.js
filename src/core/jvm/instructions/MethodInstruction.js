/** @ignore */
const MemberInstruction = require('./MemberInstruction');

export default class MethodInstruction extends MemberInstruction {

  constructor(methodInfo, idx, opcode) {
    super(methodInfo, idx, opcode);
  }
}
