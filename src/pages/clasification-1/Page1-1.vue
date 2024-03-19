import { onMounted } from 'vue';
<template>
  <q-page class="flex column q-ml-xl">
    <h2 id="overview">Overview</h2>
    <p>There are multiple ways to customize Bootstrap. Your best path can depend on your project, the complexity of your build tools, the version of Bootstrap you’re using, browser support, and more.</p>
    <p>Our two preferred methods are:</p>
    <ol>
      <li>Using Bootstrap via package manager so you can use and extend our source files.</li>
      <li>Using Bootstrap’s compiled distribution files or jsDelivr so you can add onto or override Bootstrap’s styles.</li>
    </ol>
    <p>While we cannot go into details here on how to use every package manager, we can give some guidance on using Bootstrap with your own Sass compiler.</p>
    <p>For those who want to use the distribution files, review the getting started page for how to include those files and an example HTML page. From there, consult the docs for the layout, components, and behaviors you’d like to use.</p>
    <p>As you familiarize yourself with Bootstrap, continue exploring this section for more details on how to utilize our global options, making use of and changing our color system, how we build our components, how to use our growing list of CSS custom properties, and how to optimize your code when building with Bootstrap.</p>
    <h2 id="csps-and-embedded-svgs">CSPs and embedded SVGs</h2>
    <p>Several Bootstrap components include embedded SVGs in our CSS to style components consistently and easily across browsers and devices. For organizations with more strict CSP configurations, we’ve documented all instances of our embedded SVGs (all of which are applied via background-image) so you can more thoroughly review your options.</p>
    <ul>
      <li>Accordion</li>
      <li>Carousel controls</li>
      <li>Close button (used in alerts and modals)</li>
      <li>Form checkboxes and radio buttons</li>
      <li>Form switches</li>
      <li>Form validation icons</li>
      <li>Navbar toggle buttons</li>
      <li>Select menus</li>
    </ul>
    <p>Based on community conversation, some options for addressing this in your own codebase include replacing the URLs with locally hosted assets, removing the images and using inline images (not possible in all components), and modifying your CSP. Our recommendation is to carefully review your own security policies and decide on the best path forward, if necessary.</p>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'page-1-1'
});
</script>
