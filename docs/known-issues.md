---
id: known-issues.md
title: Known issues
sidebar_label: Known issues
slug: /known-issues
---

Known issues are low priority defects of the codes that will be fixed in the future releases.

## 1. Shadow dom styles not reflecting

When making changes to the styles in a shadow dom component, styles are not reflected to the application when serving the project using `mn serve`.
Building the application using `mn build` should be no problem.
This issue is only found in shadow dom component while using `mn serve`.

#### Workaround

After making changes to the component styles, we need to save the corresponding `.component.tsx` file by pressing `ctrl+s` event no changes are made inside the file in order to trigger the hot module replacement(HMR) of the CLI.
