<template>
  <q-page class="flex column q-ml-xl">
    <h2 id="containers">Containers</h2>
    <p>Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.</p>
    <h2 id="containers-work">How they work</h2>
    <p>Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.</p>
    <p>Bootstrap comes with three different containers:</p>
    <ul>
      <li>.container, which sets a max-width at each responsive breakpoint</li>
      <li>.container-{breakpoint}, which is width: 100% until the specified breakpoint</li>
      <li>.container-fluid, which is width: 100% at all breakpoints</li>
    </ul>
    <h2 id="containers-responsive">Responsive containers</h2>
    <p>Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply max-widths for each of the higher breakpoints. For example, .container-sm is 100% wide to start until the sm breakpoint is reached, where it will scale up with md, lg, xl, and xxl.</p>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'page-2-2'
});
</script>
