.DEFAULT_GOAL := help

.PHONY: help
help:                                                   ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN { FS = ":.*?## " }; { lines[FNR]=$$1":##"$$2; len=length($$1); if (len > max) max=len; ++c; } END { FS=":##";fmt="\033[36;1m%-"max"s\033[37;1m    %s\033[0m\n"; for(i=1;i<=c;++i){$$0=lines[i]; printf(fmt, $$1, $$2) } }'

.PHONY: app-run
app-run:												## Starts Unicorn server
	uvicorn main:app --reload

.PHONY: test
test:												## Runs all tests.
	pytest .