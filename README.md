# Tailwind CSS Class Order Conflict

This repository demonstrates a common issue in Tailwind CSS where the order of utility classes can lead to unexpected styling results.

## Problem
The `bug.js` file contains a simple flexbox example where two divs are supposed to have different background colors (red and blue). However, due to the order of the Tailwind CSS classes, both divs end up with a blue background. This happens because Tailwind applies the styles in the order they are written; the last class's style takes priority if conflicting.