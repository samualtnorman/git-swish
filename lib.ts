import { execFile } from "child_process"

export function runCommand(command: string, ...args: string[]) {
	return new Promise<string>((resolve, reject) => {
		execFile(command, args, (error, stdout) => {
			if (error)
				return reject(error)

			resolve(stdout)
		})
	})
}
