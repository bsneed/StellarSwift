class SwiftTaskProvider {
	constructor() {
		
	}
	
	provideTasks() {
		let task = new Task("Swift");
		
		task.setAction(Task.Build, new TaskProcessAction('/usr/bin/swift', {
			args: ["build"],
			env: {}
		}));
		
		task.setAction(Task.Run, new TaskProcessAction('/usr/bin/swift', {
			args: ["test"],
			env: {}
		}));
		
		task.setAction(Task.Clean, new TaskProcessAction('/usr/bin/swift', {
			args: ["package", "clean"],
			env: {}
		}));

		return [task];
	}
}

module.exports = SwiftTaskProvider;
