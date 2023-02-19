cookieExtension {
  getInfo() {
    return {
      id: 'cookie', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'save [ONE] as cookie',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            }
          }
        }
      ]
    };
  }
  cookie(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    document.cookie = args.ONE;
  }
}
Scratch.extensions.register(cookie);



