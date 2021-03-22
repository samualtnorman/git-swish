import { exec } from "child_process"

export function runCommand(command: string) {
	return new Promise<string>((resolve, reject) => {
		exec(command, (error, stdout) => {
			if (error)
				return reject(error)

			resolve(stdout)
		})
	})
}
