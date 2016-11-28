.PHONY: all
all:
	(make js & make server & wait)

.PHONY: js
js:
	webpack --watch --progress

.PHONY: server
server:
	browser-sync start --server --files='index.html,dist/*.css,dist/bundle.js'