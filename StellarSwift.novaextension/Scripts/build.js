class SwiftTaskProvider {
	constructor() {
		
	}
	
	provideTasks() {
		// Running executable
		let runner = new Task("Execute");
		
		runner.setAction(Task.Build, new TaskProcessAction('/usr/bin/swift', {
			args: ["build"],
			env: {}
		}));
		
		runner.setAction(Task.Run, new TaskProcessAction('/usr/bin/swift', {
			args: ["run"],
			env: {}
		}));
		
		runner.setAction(Task.Clean, new TaskProcessAction('/usr/bin/swift', {
			args: ["package", "clean"],
			env: {}
		}));
		
		// Running tests
		let tester = new Task("Test");
		
		tester.setAction(Task.Build, new TaskProcessAction('/usr/bin/swift', {
			args: ["build"],
			env: {}
		}));
		
		tester.setAction(Task.Run, new TaskProcessAction('/usr/bin/swift', {
			args: ["test"],
			env: {}
		}));
		
		tester.setAction(Task.Clean, new TaskProcessAction('/usr/bin/swift', {
			args: ["package", "clean"],
			env: {}
		}));

		// Return the tasks
		return [runner, tester];
	}
}

module.exports = SwiftTaskProvider;
