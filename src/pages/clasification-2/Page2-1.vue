<template>
  <q-page class="flex column q-ml-xl">
    <h2 id="breakpoints">Breakpoints</h2>
    <p>Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.</p>
    <h2 id="core-concepts">Core concepts</h2>
    <ul>
      <li>Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.</li>
      <li>Use media queries to architect your CSS by breakpoint. Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use min-width in our media queries.</li>
      <li>Mobile first, responsive design is the goal. Bootstrap’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.</li>
    </ul>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'page-2-1'
});
</script>
