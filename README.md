# StellarSwift

Swift Addons for Panic's Nova app.

## Language Server

Currently only supports Swift.  Hard-coded at the moment to /Applications/Xcode.app/..., however this will be changed in the near future.

## Build Tasks

Build commands for Swift Package Manager project.  Build/Clean currently are functional, however Run currently only runs Tests.
Build failures and issues do currently show up in the `issues` pane.

## Syntax Highlighting

These definitions were provided by Pixel Foundry; A huge debt of gratitude to the team that built that out.

## TODO

- Restart Sourcekitd when it crashes. :(
- Respect the values set by `xcode-select` for the Xcode toolchain path.
- Update errors on screen from completion/errors a little less aggressively.
- Figure out how to get the Run build command functioning properly.
- Figure out the appropriate place for running Tests.
- Add support for xcodebuild.

...

- Figure out how to debug effectively without jumping over to Xcode.
