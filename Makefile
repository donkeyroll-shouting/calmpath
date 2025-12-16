.PHONY: install dev build start test

install:
	cd app && npm install

dev:
	cd app/apps/web && npm run dev

build:
	cd app/apps/web && npm run build

start:
	cd app/apps/web && npm run start

test:
	@echo "No tests implemented yet"
