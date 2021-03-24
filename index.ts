import { runCommand } from "./lib"

export async function swish(branch: string) {
	console.log(await runCommand("git", "stash", "push", "-a", "-m", "swish"))
	console.log(await runCommand("git", "switch", branch).catch((error: Error) => error.message.slice(error.message.indexOf("\n") + 1)))

	let stashToPop: string | null = null

	for (const line of (await runCommand("git", "stash", "list")).slice(0, -1).split("\n")) {
		const [ , stash, lineBranch, message ] = line.match(/(stash@{.+?}): (?:.+? on|On) (.+?): (.+)/)!

		if (message != "swish" || lineBranch != branch)
			continue

		stashToPop = stash
		break
	}

	if (stashToPop)
		console.log(await runCommand("git", "stash", "pop", stashToPop))
}
