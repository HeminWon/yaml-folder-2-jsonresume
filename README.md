# yaml-folder-2-jsonresume

transform folder with YAML's files to JSON resume's file

## Usage

```sh
yaml-folder-2-jsonresume <inputFolder> <outputFile>
```

```shell
nix develop
npm install
# click package.json debug script in vscode
tsc
node ./dist/cli.js ./tests/example/input test.json
```

Files can be YAML, JSON or any types supported by [Quaff](https://www.npmjs.com/package/quaff)

## Example

A folder like

```sh
tree resume/
resume/
├── awards
│  └── 2014_company.yaml
├── basics.yaml
├── education
│  └── 2011_university.yaml
├── interests
│  └── wildlife.yaml
├── languages.yaml
├── publications
│  └── 2014_publication.yaml
├── references.yaml
├── skills
│  └── web_development.yaml
├── volunteer
│  └── 2012_organization.json
└── work
   └── 2013_company.yml

yaml-folder-2-jsonresume resume/ resume.json
```
## Acknowledgment：

This repository is based on the work of [pinage404](https://gitlab.com/pinage404). The original project can be found [here](https://gitlab.com/pinage404/yaml-folder-2-jsonresume).