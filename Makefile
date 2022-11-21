ifneq (,$(wildcard ./.env))
    include .env
    export
endif

.Phony: install
install:
	./scripts/install_mdbook.sh

.Phony: serve
serve:
	deno run -A cli.ts --serve

.Phony: build
build:
	deno run -A ./cli.ts

.Phony: today
today:
	deno run -A ./cli.ts --today

.Phony: yestoday
yestoday:
	deno run -A ./cli.ts --yestoday

.Phony: day
day:
	deno run -A ./cli.ts --day=$(day)

.Phony: serveday
serveday:
	deno run -A ./cli.ts --serve --day=$(day)
