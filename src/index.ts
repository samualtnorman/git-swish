import childProcess from "child_process"
import { promisify } from "util"

const runCommand = promisify(childProcess.execFile)

export async function swish(branch: string) {
	{
		const { stdout, stderr } = await runCommand("git", [ "stash", "push", "-a", "-m", "swish" ])
		console.log(stdout)
		console.error(stderr)
	}

	{
		const { stdout, stderr } = await runCommand("git", [ "switch", branch ])//.catch((error: Error) => error.message.slice(error.message.indexOf("\n") + 1))
		console.log(stdout)
		console.error(stderr)
	}

	let stashToPop: string | null = null

	for (const line of (await runCommand("git", [ "stash", "list" ])).stdout.slice(0, -1).split("\n")) {
		const [ , stash, lineBranch, message ] = line.match(/(stash@{.+?}): (?:.+? on|On) (.+?): (.+)/)!

		if (message == "swish" && lineBranch == branch) {
			stashToPop = stash
			break
		}
	}

	if (stashToPop) {
		const { stdout, stderr } = await runCommand("git", [ "stash", "pop", stashToPop ])
		console.log(stdout)
		console.error(stderr)
	}
}
