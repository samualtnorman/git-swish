import { runCommand } from "./lib"

export async function swish(branch: string) {
	console.log(await runCommand(`git stash push -a`))
	console.log(await runCommand(`git switch ${branch}`))

	let stashToPop: string | null = null

	for (const line of (await runCommand(`git stash list`)).slice(0, -1).split("\n")) {
		const [ , stash, lineBranch ] = line.match(/(stash@{.+?}): .+? on (.+?):/)!

		if (lineBranch != branch)
			continue

		stashToPop = stash
		break
	}

	if (stashToPop)
		console.log(await runCommand(`git stash pop ${stashToPop}`))
}
