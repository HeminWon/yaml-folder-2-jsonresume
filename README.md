# yaml-folder-2-jsonresume

transform folder with YAML's files to JSON resume's file

## Usage

```sh
yaml-folder-2-jsonresume <inputFolder> <outputFile>
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
