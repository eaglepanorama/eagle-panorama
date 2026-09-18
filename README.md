# Eagles Panorama

Eagles Panorama is a broad learning-explorer website built around one idea: take a step back from a subject and see the bigger picture. The project combines a curated knowledge layer with live public sources so a learner can move from an overview into related and deeper subjects.

## Current features

- Search any topic through Wikipedia's live API.
- Autocomplete suggestions while typing.
- Language selection with live Wikipedia switching.
- Beginner, Intermediate, and Advanced learning levels.
- Curated learning paths for core subjects.
- Prerequisites, key concepts, related subjects, and curated resources.
- Public-learning book search through Open Library.
- Clickable learning-path and related-topic exploration.
- A more forgiving topic matcher for common wording, accents, plurals, and multilingual aliases.
- Animated green-and-brown visual theme.
- About section explaining the project's purpose and architecture.

## Project structure

```text
Eagles-Panorama/
├── index.html
├── topics.js
└── README.md
```

### `index.html`
Handles the interface, styling, search controls, API requests, dynamic result rendering, language switching, learning-level selection, autocomplete, and the About section.

### `topics.js`
Contains the curated subject database: aliases, translated topic information, learning paths, prerequisites, key concepts, related subjects, and external resources. Adding a new topic here automatically adds it to the topic browser because the interface is data-driven.

### `README.md`
Documents how the project works and what technologies are involved.

## Main technologies learned

### HTML
Page structure, sections, inputs, buttons, links, attributes, and semantic organization.

### CSS
Layout, flexbox, grid, responsive design, hover states, shadows, transparency, blur effects, gradients, and CSS animations.

### JavaScript
Variables, functions, parameters, objects, arrays, loops, conditionals, template literals, DOM manipulation, events, asynchronous code, and reusable components.

### APIs and `fetch()`
Eagles Panorama sends requests to public web APIs and processes JSON responses. Wikipedia provides live topic information and Open Library provides public-library search results.

### Data-driven design
Instead of writing a separate page for every subject, the app stores subject information in a structured object and generates the interface from that data.

### Local development
The project is run with a small local Python server so browser requests to external APIs work reliably: 

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Design philosophy

The project is intentionally broader than a normal topic database. Eagles Panorama is meant to organize exploration: one subject can lead to another, and a learner can move outward through related ideas instead of staying on one isolated page.

## Important limitation

For subjects that do not have curated entries in `topics.js`, the site can still retrieve live Wikipedia information and generate an exploration path from related search results. That automatically generated path is an exploration aid, not a guarantee that the sequence is a formally validated curriculum.

## Future directions

Possible future work includes persistent user learning data, bookmarks, progress tracking, richer source diversity, more curated subjects, stronger recommendation logic, and deeper multilingual coverage. These should be added without sacrificing the stable core search experience.
