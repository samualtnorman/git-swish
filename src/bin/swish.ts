#!/usr/bin/env node
import { swish } from ".."

if (process.argv[2])
	swish(process.argv[2])
else
	console.log("Usage:\nswish <branch>")
